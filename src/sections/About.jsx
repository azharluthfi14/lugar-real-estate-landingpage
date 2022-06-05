import React from "react";
import aboutImages from "../assets/about.jpg";

const About = () => {
  return (
    <section className="mx-6 lg:mx-28 py-20">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
        <div className="h-full lg:w-1/2">
          <img
            src={aboutImages}
            className="lg:h-80"
            alt="about-images"
            draggable="false"
          />
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 h-full">
          <h1 className="font-bold text-4xl mb-10 tracking-wide text-black">
            Award winning real <br /> estate company in <br /> Dubai
          </h1>
          <p className="text-gray mb-10 leading-relaxed">
            Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
            scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis
            ornare magna.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="space-y-3">
              <h1 className="text-blue uppercase text-xs lg:text-sm">
                Previous projects
              </h1>
              <h2 className="text-5xl text-black font-light">34+</h2>
            </div>
            <div className="space-y-3">
              <h1 className="text-blue uppercase text-xs lg:text-sm">
                Years experience
              </h1>
              <h2 className="text-5xl text-black font-light">20y</h2>
            </div>
            <div className="space-y-3">
              <h1 className="text-blue uppercase text-xs lg:text-sm">
                Ongoing projects
              </h1>
              <h2 className="text-5xl text-black font-light">12</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
