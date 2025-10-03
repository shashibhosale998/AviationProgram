// src/pages/dashboard/leads/AdmissionInquiries.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");
const DEFAULT_SORT = "createdAt,desc";

export default function AdmissionInquiries() {
  const [query, setQuery] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1); // UI is 1-based; backend is 0-based
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // debounced search term (300ms)
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
        const u = new URL(`${API_BASE}/api/inquiries`);
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
        setErr(e.message || "Failed to load inquiries.");
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
          <span>›</span><span className="text-gray-700">Admission Leads</span>
        </nav>
      </div>

      {/* title */}
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">Admission Leads</h1>
      </div>

      {/* main card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        {/* header */}
        <div className="px-6 py-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-indigo-600 text-white grid place-items-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M16 11a3 3 0 11-6 0 3 3 0 016 0z" fill="currentColor" />
                <path d="M2 20a7 7 0 0114 0v1H2v-1z" fill="currentColor" opacity="0.9" transform="translate(0 -4)" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Admission Leads</h3>
              <p className="text-sm text-gray-500">Manage your Admission leads here.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow hover:brightness-95">
              Column visibility ▾
            </button>
            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow hover:brightness-95">
              Copy
            </button>
            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow hover:brightness-95">
              Excel
            </button>
            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow hover:brightness-95">
              PDF
            </button>
            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow hover:brightness-95">
              Print
            </button>
          </div>
        </div>

        {/* controls */}
        <div className="px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-600">Show</label>
              <select
                value={perPage}
                onChange={handlePerPageChange}
                className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              >
                {[5, 10, 20, 50].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <span className="text-sm text-gray-500">entries per page</span>
            </div>

            <div className="md:col-span-1" />

            <div className="flex justify-end">
              <div className="w-full md:w-64">
                <label className="text-sm text-gray-600 block mb-1">Search:</label>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                  placeholder="Search name, phone, standard, branch..."
                  className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* loading / error */}
        {loading && (
          <div className="px-6 pb-6">
            <div className="p-4 text-sm text-gray-500">Loading inquiries…</div>
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
          <div className="px-6 pb-6">
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-gray-700">SR NO</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-gray-700">NAME</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-gray-700">PHONE NUMBER</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-gray-700">STANDARD</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-gray-700">BRANCH</th>
                    <th className="px-5 py-4 text-left text-xs font-semibold text-gray-700">MESSAGE</th>
                  </tr>
                </thead>

                <tbody>
                  {rows.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-5 py-10 text-center text-sm text-gray-500">
                        No records found.
                      </td>
                    </tr>
                  ) : (
                    rows.map((row, idx) => (
                      <tr key={row.id ?? idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-5 py-6 align-top text-sm text-gray-700">
                          {(page - 1) * perPage + idx + 1}
                        </td>
                        <td className="px-5 py-6 align-top text-sm text-gray-700 max-w-xs">
                          <div className="whitespace-normal">{row.name || "—"}</div>
                        </td>
                        <td className="px-5 py-6 align-top text-sm text-gray-700">{row.phone || "—"}</td>
                        <td className="px-5 py-6 align-top text-sm text-gray-700">{row.standard || "—"}</td>
                        <td className="px-5 py-6 align-top text-sm text-gray-700">{row.branch || "—"}</td>
                        <td className="px-5 py-6 align-top text-sm text-gray-700 max-w-2xl">
                          <div className="whitespace-normal">{row.message || "—"}</div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* footer / pagination */}
        {!loading && (
          <div className="px-6 py-4 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-sm text-gray-600">
              Showing <strong>{rows.length === 0 ? 0 : (page - 1) * perPage + 1}</strong> to{" "}
              <strong>{(page - 1) * perPage + rows.length}</strong> of{" "}
              <strong>{total}</strong> entries
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="px-3 py-1 border rounded disabled:opacity-50 text-sm"
              >
                Prev
              </button>
              <div className="px-3 py-1 border rounded text-sm">
                {page} / {totalPages}
              </div>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50 text-sm"
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
