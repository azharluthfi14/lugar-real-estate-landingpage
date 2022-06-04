import React from "react";
import testimonialImages from "../assets/testimonial.jpg";

const Testimonials = () => {
  return (
    <section className="py-20 mx-28">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-black">
          Few smiles and comment
        </h1>
        <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
      </div>
      <div className="flex justify-between">
        <div className="overflow-hidden w-full">
          <img
            src={testimonialImages}
            className="h-[350px] w-[445px] object-none"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="font-bold text-8xl">”</div>
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
