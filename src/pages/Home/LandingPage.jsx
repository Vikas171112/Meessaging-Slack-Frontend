import Brands from "@/components/organisms/LandingPage/Brands";
import CTA from "@/components/organisms/LandingPage/CTA";
import Features from "@/components/organisms/LandingPage/Features";
import Footer from "@/components/organisms/LandingPage/Footer";
import Hero from "@/components/organisms/LandingPage/Hero";
import Navbar from "@/components/organisms/LandingPage/Navbar";
import React from "react";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Brands />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
