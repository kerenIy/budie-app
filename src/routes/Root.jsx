import React from "react";
import Navbar from "../components/home/Navbar";

import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Partners from "../components/home/Partners";
import Why from "../components/home/Why";
import Footer from "../components/home/Footer";
import Banner from "../components/home/Banner";
import FAQs from "../components/home/FAQs";

export default function Root() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Why />
      <Banner />
      <FAQs />
      <Footer />
    </>
  );
}
