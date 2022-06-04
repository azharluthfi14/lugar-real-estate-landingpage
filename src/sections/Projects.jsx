import React from "react";
import projectImages1 from "../assets/project1.jpg";
import projectImages2 from "../assets/project2.jpg";
import projectImages3 from "../assets/project3.jpg";

const Projects = () => {
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
    <section className="py-20 mx-28">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 text-black">Ongoing projects</h1>
        <p className="text-gray text-base">
          Turpis facilisis tempor pulvinar in lobortis ornare magna.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {projects.map((project) => (
          <div key={project.id} className=" relative">
            <div>
              <img
                className="w-[350px] h-[490px]"
                src={project.images}
                alt=""
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
