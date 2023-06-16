import React from "react";
import todo from "../assets/projects/Firebase To-do List.jpg";
import weather from "../assets/projects/weather.png";
import navpu from "../assets/projects/navpu.png";
import detection from "../assets/projects/detection.png";
import portfolio from "../assets/projects/portfolio.png";
import more from "../assets/projects/more.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: todo,
      name: "Firebase To-Do List",
      href: "https://github.com/kymyr/firebase-todo-list",
    },
    {
      id: 2,
      src: weather,
      name: "Responsive Weather App",
      href: "https://github.com/kymyr/weather-app-js"
    },
    {
      id: 3,
      src: navpu,
      name: "NAVPU Predictive Model",
      href: "https://github.com/kymyr/NAVPU-Predictive-Model",
    },
    {
      id: 4,
      src: detection,
      name: "Motion & Object Detection",
      href: "https://github.com/kymyr/motion-object-detection",
    },
    {
      id: 5,
      src: portfolio,
      name: "Professional Portfolio",
      href: "https://github.com/kymyr/portfolio",
    },
    {
      id: 6,
      src: more,
      name: "Check out my Github",
      href: "https://github.com/kymyr",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline underline hover:decoration-white decoration-gray-600">
                    Projects
                </p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {projects.map(({ id, src, href, name }) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img
                        src={src}
                        alt=""
                        className="rounded-md duration-200 hover:scale-105"
                    />
                    <div className="flex items-center justify-center">
                        <button className="w-100 px-6 py-3 m-4 duration-200 hover:scale-105">
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                target="_blank"
                                rel="noreferrer"
                                >
                                {name}
                            </a>
                        </button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Projects;
