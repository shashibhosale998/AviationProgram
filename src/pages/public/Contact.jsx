import React from "react";
import MainLayout from "../../layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <section className="max-w-2xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Contact Us</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full rounded border-gray-200" placeholder="Your name" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full rounded border-gray-200" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 block w-full rounded border-gray-200" rows="4" placeholder="How can we help?"></textarea>
          </div>

          <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded">Send Message</button>
        </form>
      </section>
    </MainLayout>
  );
}
