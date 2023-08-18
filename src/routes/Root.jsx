import React from "react";
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Partners from "../components/Partners";
import Why from "../components/Why";
import Footer from "../components/Footer";
import FAQs from "../components/FAQs";

export default function Root() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Why />
      <FAQs />
      <Footer />
    </>
  );
}
