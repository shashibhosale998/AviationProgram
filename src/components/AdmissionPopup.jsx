import React, { useState, useEffect } from "react";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");

const AdmissionPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  // form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    standard: "",
    branch: "",     // optional in your backend—can be left empty
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    setSuccessMsg("");
    setErrorMsg("");
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.phone.trim()) return "Please enter your mobile number.";
    // very basic 10-digit check; adjust as needed
    if (!/^\d{10}$/.test(form.phone.trim()))
      return "Enter a valid 10-digit mobile number.";
    if (!form.standard) return "Please select a standard.";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    const v = validate();
    if (v) {
      setErrorMsg(v);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        standard: form.standard,
        message: form.message.trim() || null,
        // branch is optional on your controller; send only if provided
        ...(form.branch?.trim() ? { branch: form.branch.trim() } : {}),
        // status can be omitted—let backend default (e.g., NEW)
      };

      const res = await fetch(`${API_BASE}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // try to read server error body
        let text = `${res.status} ${res.statusText}`;
        try {
          const data = await res.json();
          if (data?.message) text = data.message;
        } catch {}
        throw new Error(text);
      }

      // created successfully
      setSuccessMsg("Thanks! Your inquiry has been submitted.");
      setForm({ name: "", phone: "", standard: "", branch: "", message: "" });

      // auto-close after a short delay
      setTimeout(() => {
        handleClose();
      }, 1200);
    } catch (err) {
      setErrorMsg(err.message || "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
              aria-label="Close"
              type="button"
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">
              Inquire Now!!
            </h2>

            {/* Status messages */}
            {errorMsg && (
              <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="mb-4 text-sm text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded">
                {successMsg}
              </div>
            )}

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Mobile Number"
                  inputMode="numeric"
                  maxLength={10}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                />
              </div>

              {/* Standard */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Standard
                </label>
                <select
                  name="standard"
                  value={form.standard}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                >
                  <option value="">Select Standard</option>
                  <option value="Nursery">Nursery</option>
                  <option value="Jr. KG">Jr. KG</option>
                  <option value="Sr. KG">Sr. KG</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                  <option value="5th">5th</option>
                  <option value="6th">6th</option>
                  <option value="7th">7th</option>
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                </select>
              </div>

              {/* Branch (optional — include if you want) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Branch (optional)
                </label>
                <input
                  name="branch"
                  type="text"
                  value={form.branch}
                  onChange={handleChange}
                  placeholder="e.g., Moshi / Wakad"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  rows="3"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Submit"}
              </button>

              {/* tiny helper for debugging base URL */}
              <p className="mt-2 text-[10px] text-gray-400">
                API: {API_BASE || "(same-origin)"}
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdmissionPopup;
