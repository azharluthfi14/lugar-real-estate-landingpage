import React, { useEffect, useRef } from "react";
import projectImages1 from "../assets/project1.jpg";
import projectImages2 from "../assets/project2.jpg";
import projectImages3 from "../assets/project3.jpg";
import { srConfig } from "../utils/config";
import sr from "../utils/sr";

const Projects = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const projects = [
    {
      id: 1,
      images: projectImages1,
      title: "Vintage Villa",
      place: "2715 Ash Dr. San Jose, Dubai",
    },
    {
      id: 2,
      images: projectImages2,
      title: "Tonga Villa",
      place: "1901 Thornridge Cir. Shiloh 81063",
    },
    {
      id: 3,
      images: projectImages3,
      title: "Penthouse",
      place: "2464 Royal Ln. Mesa, 45463",
    },
  ];

  return (
    <section ref={revealContainer} className="py-20 mx-6 lg:mx-28">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 text-black">Ongoing projects</h1>
        <p className="text-gray text-base">
          Turpis facilisis tempor pulvinar in lobortis ornare magna.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-3">
        {projects.map((project) => (
          <div key={project.id} className=" relative">
            <div>
              <img
                className="w-full lg:w-[350px] lg:h-[490px]"
                src={project.images}
                alt="project-images"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="absolute -mt-2 w-3/4 p-5 bg-white shadow-lg rounded-sm">
                <h1 className="text-base font-semibold mb-1 text-black">
                  {project.title}
                </h1>
                <div className="flex items-center">
                  <span className="material-icons-outlined text-base text-black">
                    location_on
                  </span>
                  <span className="text-xs text-black">{project.place}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
