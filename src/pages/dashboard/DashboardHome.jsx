// src/pages/dashboard/DashboardHome.jsx
import React, { useEffect, useMemo, useState } from "react";

const API_BASE =
  import.meta?.env?.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}`.replace(/\/+$/, "")
    : ""; // same-origin fallback, no trailing slash

export default function DashboardHome() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [recent, setRecent] = useState([]);          // recent inquiries (array)
  const [totalInquiries, setTotalInquiries] = useState(0); // totalElements from page meta
  const [allSample, setAllSample] = useState([]);     // up to N items to compute status stats

  useEffect(() => {
    let isMounted = true;

    async function run() {
      setLoading(true);
      setErr("");

      try {
        // 1) Recent inquiries (page=0, size=8, newest first)
        const r1 = await fetch(
          `${API_BASE}/api/inquiries?page=0&size=8&sort=createdAt,desc`,
          { headers: { "Accept": "application/json" } }
        );
        if (!r1.ok) throw new Error(`Recent inquiries failed: ${r1.status}`);
        const recentPage = await r1.json();
        if (!isMounted) return;
        setRecent(Array.isArray(recentPage.content) ? recentPage.content : []);

        // 2) Get total count cheaply (size=1 to read totalElements)
        const r2 = await fetch(
          `${API_BASE}/api/inquiries?page=0&size=1&sort=createdAt,desc`,
          { headers: { "Accept": "application/json" } }
        );
        if (!r2.ok) throw new Error(`Count fetch failed: ${r2.status}`);
        const countPage = await r2.json();
        if (!isMounted) return;
        setTotalInquiries(Number(countPage.totalElements ?? 0));

        // 3) Pull a single page with bigger size to compute status distribution quickly
        //    (Adjust size to your comfortable upper bound; this is just a snapshot)
        const r3 = await fetch(
          `${API_BASE}/api/inquiries?page=0&size=200&sort=createdAt,desc`,
          { headers: { "Accept": "application/json" } }
        );
        if (!r3.ok) throw new Error(`Stats sample fetch failed: ${r3.status}`);
        const samplePage = await r3.json();
        if (!isMounted) return;
        setAllSample(Array.isArray(samplePage.content) ? samplePage.content : []);
      } catch (e) {
        if (!isMounted) return;
        setErr(e.message || "Something went wrong while loading dashboard.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    run();
    return () => { isMounted = false; };
  }, []);

  // Compute quick stats from the sample we fetched
  const statusBuckets = useMemo(() => {
    const buckets = { NEW: 0, IN_PROGRESS: 0, APPROVED: 0, REJECTED: 0, OTHER: 0 };
    for (const it of allSample) {
      const s = (it?.status || "").toUpperCase();
      if (s in buckets) buckets[s] += 1;
      else buckets.OTHER += 1;
    }
    return buckets;
  }, [allSample]);

  // Build cards only from real data
  const cards = useMemo(() => {
    const list = [];

    // Total Inquiries from totalElements
    list.push({
      label: "Total Inquiries",
      value: totalInquiries.toLocaleString(),
      sub: `${allSample.length} sampled`,
      icon: "📥",
      color: "bg-blue-100 text-blue-600",
    });

    // Status buckets (computed from sample)
    if (allSample.length > 0) {
      list.push({
        label: "New",
        value: statusBuckets.NEW.toLocaleString(),
        sub: "Status: NEW",
        icon: "🆕",
        color: "bg-indigo-100 text-indigo-600",
      });
      list.push({
        label: "In Progress",
        value: statusBuckets.IN_PROGRESS.toLocaleString(),
        sub: "Status: IN_PROGRESS",
        icon: "⏳",
        color: "bg-yellow-100 text-yellow-600",
      });
      list.push({
        label: "Approved",
        value: statusBuckets.APPROVED.toLocaleString(),
        sub: "Status: APPROVED",
        icon: "✅",
        color: "bg-green-100 text-green-600",
      });
    }

    return list;
  }, [totalInquiries, allSample.length, statusBuckets]);

  return (
    <>
      {/* Welcome Banner (ONLY on DashboardHome) */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-400 rounded-lg p-6 text-white shadow-lg overflow-hidden relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold mb-2">Welcome Master</h1>
            <p className="text-sm opacity-90 mb-4">
              Welcome to GEMS! 🎉 <br />
              Your one-stop solution for managing inquiries and admissions efficiently.
            </p>
            <p className="text-sm opacity-90">Get started and take control of your workflows today! 💼✨</p>
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <ellipse cx="40" cy="48" rx="6" ry="3" fill="#fff" opacity="0.12"/>
                <path d="M45 13c-4-1-18 6-22 10s-4 18-4 18 14 2 22-2 10-11 10-11 0-13-6-15z" fill="#D8EEFF"/>
                <path d="M45 13c-4-1-18 6-22 10 6 2 18 6 22 2s10-11 10-11 0-13-6-15z" fill="#A5D3FF"/>
                <circle cx="46" cy="18" r="5" fill="#2B6BE5"/>
                <path d="M28 34s4-5 14-9" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="0.6" strokeLinecap="round"/>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Loading / Error */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
              <div className="w-12 h-12 rounded-full bg-gray-100 mb-4" />
              <div className="h-5 bg-gray-100 rounded w-24 mb-2" />
              <div className="h-4 bg-gray-100 rounded w-32" />
            </div>
          ))}
        </div>
      )}
      {err && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-200">
          {err}
        </div>
      )}

      {/* Stats cards (from live data only) */}
      {!loading && !err && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.color} text-xl`}>
                {item.icon}
              </div>
              <div>
                <div className="text-xl font-semibold">{item.value}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
                {item.sub && <div className="text-xs text-gray-400">{item.sub}</div>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recent inquiries (from backend) */}
      {!loading && !err && (
        <section className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Inquiries</h2>
            <a
              href="/inquiries"
              className="text-sm text-blue-600 hover:underline"
            >
              View all
            </a>
          </div>

          {recent.length === 0 ? (
            <div className="text-sm text-gray-500">No inquiries yet.</div>
          ) : (
            <ul className="divide-y">
              {recent.map((r, i) => (
                <li key={r.id ?? i} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium">{r.name || "—"}</div>
                    <div className="text-xs text-gray-500">
                      {r.phone ? `📞 ${r.phone}` : ""} {r.standard ? ` • Std: ${r.standard}` : ""}
                      {r.branch ? ` • ${r.branch}` : ""}
                      {r.status ? ` • ${r.status}` : ""}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatDate(r.createdAt)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </>
  );
}

function formatDate(d) {
  if (!d) return "—";
  try {
    const dt = new Date(d);
    // e.g., 2025-09-21
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, "0");
    const day = String(dt.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  } catch {
    return String(d);
  }
}
