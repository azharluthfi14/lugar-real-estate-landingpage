import React from "react";
import LayoutPage from "../components/Layout";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function IndexPages() {
  return (
    <>
      <LayoutPage>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </LayoutPage>
    </>
  );
}
