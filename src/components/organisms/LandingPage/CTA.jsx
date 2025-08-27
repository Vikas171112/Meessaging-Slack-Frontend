import React from "react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-purple-700 text-center text-white">
      <h3 className="text-3xl font-bold">Ready to get started?</h3>
      <p className="mt-2 text-lg">
        Try FlowChat free today and bring your team together.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
        <Button size="lg" variant="outline" className="text-white border-white">
          Contact Sales
        </Button>
      </div>
    </section>
  );
}
