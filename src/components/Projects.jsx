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
    },
    {
      id: 2,
      src: weather,
    },
    {
      id: 3,
      src: navpu,
    },
    {
      id: 4,
      src: detection,
    },
    {
      id: 5,
      src: portfolio,
    },
    {
      id: 6,
      src: more,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline underline hover:decoration-white decoration-gray-600">
                    Projects
                </p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {projects.map(({ id, src }) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img
                        src={src}
                        alt=""
                        className="rounded-md duration-200 hover:scale-105"
                    />
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Demo
                        </button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Github
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
