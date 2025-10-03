import React from "react";
import MainLayout from "../../layouts/MainLayout";

export default function Blog() {
  return (
    <MainLayout>
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Blog</h2>
        <p className="text-gray-600">Read the latest news, tips, and student stories from Aviation Academy. (Add posts here.)</p>
      </section>
    </MainLayout>
  );
}
