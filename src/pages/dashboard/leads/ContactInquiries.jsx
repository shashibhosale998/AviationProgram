// src/pages/dashboard/leads/ContactInquiries.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");
const RESOURCE_PATH = "/api/inquiries"; // change to "/api/contact-inquiries" if you have a separate controller
const DEFAULT_SORT = "createdAt,desc";

export default function ContactInquiries() {
  const [query, setQuery] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1); // UI 1-based
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // debounce search
  const [debouncedQ, setDebouncedQ] = useState("");
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(query.trim()), 300);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    let alive = true;
    async function load() {
      setLoading(true);
      setErr("");
      try {
        const u = new URL(`${API_BASE}${RESOURCE_PATH}`);
        u.searchParams.set("page", String(page - 1)); // backend 0-based
        u.searchParams.set("size", String(perPage));
        u.searchParams.set("sort", DEFAULT_SORT);
        if (debouncedQ) u.searchParams.set("q", debouncedQ);

        const res = await fetch(u.toString(), { headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const data = await res.json();
        if (!alive) return;

        setRows(Array.isArray(data.content) ? data.content : []);
        setTotal(Number.isFinite(data.totalElements) ? data.totalElements : 0);
      } catch (e) {
        if (!alive) return;
        setErr(e.message || "Failed to load contact inquiries.");
        setRows([]);
        setTotal(0);
      } finally {
        if (alive) setLoading(false);
      }
    }
    load();
    return () => { alive = false; };
  }, [page, perPage, debouncedQ]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(total / perPage)),
    [total, perPage]
  );

  function handlePerPageChange(e) {
    setPerPage(Number(e.target.value));
    setPage(1);
  }

  return (
    <div className="space-y-6">
      {/* breadcrumb */}
      <div className="text-sm text-gray-500">
        <nav className="flex items-center gap-2">
          <Link to="/" className="hover:underline">Home</Link>
          <span>›</span><span className="text-gray-400">Leads</span>
          <span>›</span><span className="text-gray-700">Contact Leads</span>
        </nav>
      </div>

      {/* title */}
      <h1 className="text-3xl font-extrabold text-gray-900">Contact Leads</h1>

      {/* card */}
      <div className="bg-white border rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-blue-600 text-white grid place-items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M16 11a3 3 0 11-6 0 3 3 0 016 0z" fill="currentColor" />
                  <path d="M2 20a7 7 0 0114 0v1H2v-1z" fill="currentColor" opacity="0.9" transform="translate(0 -4)" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Contact Leads</h3>
                <p className="text-sm text-gray-500">Manage your contact leads here.</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              {["Column visibility ▾", "Copy", "Excel", "PDF", "Print"].map((btn) => (
                <button key={btn} className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm shadow-sm hover:brightness-95">
                  {btn}
                </button>
              ))}
            </div>
          </div>

          {/* controls */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-600">Show</label>
              <select
                value={perPage}
                onChange={handlePerPageChange}
                className="border rounded px-3 py-2 text-sm outline-none"
              >
                {[5, 10, 20, 50].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
              <span className="text-sm text-gray-500">entries per page</span>
            </div>

            <div className="md:col-span-1" />

            <div className="flex justify-end">
              <div className="w-64">
                <label className="text-sm text-gray-600 block mb-1">Search:</label>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                  placeholder="Search name, phone, email, standard, status..."
                  className="w-full border rounded px-3 py-2 text-sm outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* loading / error */}
        {loading && (
          <div className="px-6 pb-6">
            <div className="p-4 text-sm text-gray-500">Loading contact inquiries…</div>
          </div>
        )}
        {err && !loading && (
          <div className="px-6 pb-6">
            <div className="p-4 rounded bg-red-50 text-red-700 border border-red-200 text-sm">
              Failed to load: {err}
            </div>
          </div>
        )}

        {/* table */}
        {!loading && !err && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y border-t">
              <thead className="bg-gray-50">
                <tr>
                  {["SR NO","NAME","PHONE NUMBER","EMAIL","STANDARD","STATUS","INQUIRED ON","ACTION"].map((col) => (
                    <th key={col} className="px-6 py-4 text-left text-xs font-semibold text-gray-700">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-8 text-center text-sm text-gray-500">
                      No records found.
                    </td>
                  </tr>
                ) : rows.map((row, idx) => {
                  const email = row.email || "—";                // may not exist on AdmissionInquiry
                  const status = row.status || "—";
                  const standard = row.standard || "—";
                  const inquiredOn = formatDate(row.createdAt || row.inquiredOn);
                  return (
                    <tr key={row.id ?? idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 text-sm">{(page - 1) * perPage + idx + 1}</td>
                      <td className="px-6 py-4 text-sm">{row.name || "—"}</td>
                      <td className="px-6 py-4 text-sm">{row.phone || "—"}</td>
                      <td className="px-6 py-4 text-sm">{email}</td>
                      <td className="px-6 py-4 text-sm">{standard}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="px-3 py-1 rounded-full text-white bg-red-600 text-xs font-medium">
                          {status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{inquiredOn}</td>
                      <td className="px-6 py-4 text-sm flex items-center gap-3">
                        <button className="text-gray-500 hover:text-blue-600" title="View">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button className="text-gray-500 hover:text-green-600" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4h2m2 0h2m-6 4h2m2 0h2M7 20h10M5 20h14M7 16h10" />
                          </svg>
                        </button>
                        <button className="text-gray-500 hover:text-red-600" title="Delete">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* pagination */}
        {!loading && (
          <div className="p-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing <strong>{rows.length ? (page - 1) * perPage + 1 : 0}</strong> to{" "}
              <strong>{(page - 1) * perPage + rows.length}</strong> of <strong>{total}</strong> entries
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <div className="px-3 py-1 border rounded">
                {page} / {Math.max(1, Math.ceil(total / perPage))}
              </div>
              <button
                onClick={() => setPage((p) => Math.min(Math.max(1, Math.ceil(total / perPage)), p + 1))}
                disabled={page >= Math.max(1, Math.ceil(total / perPage))}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function formatDate(d) {
  if (!d) return "—";
  try {
    const dt = new Date(d);
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, "0");
    const day = String(dt.getDate()).padStart(2, "0");
    const hh = String(dt.getHours()).padStart(2, "0");
    const mm = String(dt.getMinutes()).padStart(2, "0");
    const ss = String(dt.getSeconds()).padStart(2, "0");
    return `${day}-${m}-${y} ${hh}:${mm}:${ss}`;
  } catch {
    return String(d);
  }
}
