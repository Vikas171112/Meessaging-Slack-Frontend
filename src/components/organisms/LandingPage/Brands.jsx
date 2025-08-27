import React from "react";

export default function Brands() {
  return (
    <section className="py-12 px-8 bg-gray-50">
      <p className="text-center text-sm text-gray-500 mb-6">
        Trusted by leading companies worldwide
      </p>
      <div className="flex justify-center flex-wrap gap-10">
        <span className="font-semibold text-gray-700">Airbnb</span>
        <span className="font-semibold text-gray-700">NASA</span>
        <span className="font-semibold text-gray-700">Netflix</span>
        <span className="font-semibold text-gray-700">Uber</span>
      </div>
    </section>
  );
}
