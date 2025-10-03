import React from "react";
import MainLayout from "../../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Aviation Academy</h2>
        <p className="text-gray-700 leading-relaxed">
          Aviation Academy is committed to providing world-class training and resources for aspiring pilots and aviation professionals.
          Our courses combine practical training with industry knowledge to prepare students for successful careers in aviation.
        </p>
      </section>
    </MainLayout>
  );
}
