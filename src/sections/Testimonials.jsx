import React, { useEffect, useRef } from "react";
import testimonialImages from "../assets/testimonial.jpg";
import { srConfig } from "../utils/config";
import sr from "../utils/sr";

const Testimonials = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section ref={revealContainer} className="py-20 mx-6 lg:mx-28">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-black">
          Few smiles and comment
        </h1>
        <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="overflow-hidden w-full">
          <img
            src={testimonialImages}
            className="h-[350px] w-[445px] saturate-50 backdrop-contrast-75 object-none"
            alt=""
          />
        </div>
        <div className="w-full mt-10 lg:mt-0">
          <div className="font-bold text-blue text-8xl">”</div>
          <h1 className="text-3xl text-black font-bold mb-5">
            Dream house isn’t dream anymore
          </h1>
          <p className="text-black leading-relaxed mb-5">
            Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
            scelerisque. Ipsum, turpis facilisis tempor pulvinar.
          </p>
          <h3 className="text-black font-bold">Brooklyn Simmons</h3>
          <p className="text-black text-sm">Artist</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
