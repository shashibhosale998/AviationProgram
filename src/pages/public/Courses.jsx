import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function Courses() {
  return (
    <MainLayout>
      <section className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-medium">Private Pilot License (PPL)</h3>
            <p className="mt-2 text-gray-600">Hands-on flight training and ground school to get you flying safely.</p>
          </article>

          <article className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-medium">Commercial Pilot License (CPL)</h3>
            <p className="mt-2 text-gray-600">Advanced training for a professional flying career.</p>
          </article>
        </div>
      </section>
    </MainLayout>
  );
}
