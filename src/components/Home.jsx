import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <h2 className="text-3xl sm:text-7xl text-white font-medium">
            <div className="hover:animate-wave inline-block">👋Hi,</div> 
            <div className="inline">I'm Kyl Myrrh</div>
          </h2>
          <p className="text-gray-400 py-4 max-w-3xl hover:text-white">
            💻 Welcome to the digital sandbox that I've crafted where imagination and logic intertwine to bring visions to life. 
          </p>

          <p className="text-gray-400 py-4 max-w-3xl hover:text-white">
            🔥 I am a passionate aspiring software engineer with an insatiable curiosity and a relentless pursuit of self-improvement.
          </p>

          <p className="text-gray-400 py-4 max-w-3xl hover:text-white">
          🚀 So step into my digital realm, where creativity meets functionality and let's embark on a journey through my portfolio.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home