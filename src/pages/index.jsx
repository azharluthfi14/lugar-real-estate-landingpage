import React from "react";
import LayoutPage from "../components/Layout";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Testimonials from "../sections/Testimonials";

export default function IndexPages() {
  return (
    <>
      <LayoutPage>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
      </LayoutPage>
    </>
  );
}
