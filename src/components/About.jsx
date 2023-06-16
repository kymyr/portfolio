import React from 'react';
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import python from "../assets/python.png";
import node from "../assets/node.png";
import sass from "../assets/sass.png";
import java from "../assets/java.png";
import ts from "../assets/ts.png";
import go from "../assets/golang.png";
import postman from "../assets/postman.png";
import r from "../assets/r.png";
import tailwind from "../assets/tailwind.png";
import aws from "../assets/aws.png";
import bootstrap from "../assets/bootstrap.png";
import hc from "../assets/hc.png"

const About = () => {
    const techs = [
        {
          id: 1,
          src: hc,
          title: "HTML+CSS",
          style: "shadow-green-200",
        },
        {
          id: 2,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 3,
          src: reactImage,
          title: "React",
          style: "shadow-blue-400",
        },
        {
          id: 4,
          src: node,
          title: "Node.JS",
          style: "shadow-green-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: sass,
          title: "Sass",
          style: "shadow-pink-400",
        },
        {
          id: 7,
          src: bootstrap,
          title: "Bootstrap",
          style: "shadow-purple-700",
        },
        {
          id: 8,
          src: python,
          title: "Python",
          style: "shadow-yellow-600",
        },
        {
          id: 9,
          src: java,
          title: "Java",
          style: "shadow-orange-700",
        },
        {
          id: 10,
          src: ts,
          title: "TypeScript",
          style: "shadow-blue-800",
        },
        {
          id: 11,
          src: go,
          title: "Go",
          style: "shadow-sky-300",
        },
        {
          id: 12,
          src: r,
          title: "R",
          style: "shadow-sky-700",
        },
        {
          id: 13,
          src: aws,
          title: "Amazon Web Services",
          style: "shadow-yellow-700",
        },
        {
          id: 14,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 15,
          src: postman,
          title: "Postman",
          style: "shadow-orange-800",
        },
      ];
    
      return (
        <div
          name="about"
          className="w-full h-auto bg-gradient-to-b from-gray-800 to-black"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full md:h-auto text-white">
            <div>
              <p className="text-4xl font-bold underline decoration-gray-600 py-6 hover:decoration-white">
                About Me
              </p>
              <div className="inline-block">
                🎓 I'm a Computer Science Graduate from Holy Angel University. 
                Throughout my university years, I've worked with different projects 
                as part of my coursework along with my personal hobby for enriching my skills. 
                These are the technologies I can comfortably work with.
              </div>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-7 text-center py-8 px-12 sm:px-0 text-white">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default About