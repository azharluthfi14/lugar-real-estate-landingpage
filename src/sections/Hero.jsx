import React, { useEffect, useRef } from "react";
import heroImages from "../assets/hero.png";
import { srConfig } from "../utils/config";
import sr from "../utils/sr";

const Hero = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section className="h-screen relative bg-blue overflow-hidden">
      <div className="mx-6 lg:mx-28 lg:w-1/2 h-full flex items-center">
        <div ref={revealContainer}>
          <h1 className="font-bold mb-6 text-5xl lg:text-7xl leading-snug text-black">
            A home is <br /> built with <br /> love and dreams
          </h1>
          <p className="text-lg mb-6 tracking-wide text-black">
            Real estate farm that makes your dreams true
          </p>
          <div className="grid grid-cols-2 gap-3 w-2/3">
            <button className="bg-black text-white py-5 flex justify-center items-center">
              Our Projects
            </button>
            <button className="border border-black text-black py-5 flex justify-center items-center">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:absolute w-1/2 inset-y-0 right-0">
        <img
          src={heroImages}
          alt="hero-images"
          loading="lazy"
          draggable="false"
          className="w-full scale-[1.20] mt-10 translate-x-40 object-cover h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
