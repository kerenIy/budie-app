import React from "react";
import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Partners from "../components/Partners";
import Why from "../components/Why";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Why />
      <Footer />
    </>
  );
}
