import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Menu = () => {
    const [menu, setMenu] = useState(false);

    const menus = [
        {
            id: 1,
            menu: "home",
          },
          {
            id: 2,
            menu: "about",
          },
          {
            id: 3,
            menu: "projects",
          },
          {
            id: 4,
            menu: "contact me",
          },
    ]

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
        <div>
            {/* <h1 className="text-5xl font-signature ml-2 cursor-pointer"> */}
              <a href="home" smooth duration={500} className="text-5xl font-signature ml-2 cursor-pointer">
                &lt;Kyl Myrrh/&gt;
              </a>
            {/* </h1> */}
        </div>

        {/* Default Menu Bar */}
        <ul className="hidden md:flex">
            {menus.map(({ id, menu }) => (
            <li
                key={id}
                className="px-4 cursor-pointer capitalize text-xl text-gray-500 hover:scale-110 hover:text-white duration-200"
            >
                <Link to={menu} smooth duration={500}>
                {menu}
                </Link>
            </li>
            ))}
        </ul>
        
        {/* Mobile Layout Menu Bar */}
        <div
            onClick={() => setMenu(!menu)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
            {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        
        {menu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {menus.map(({ id, menu }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setMenu(!menu)}
                to={menu}
                smooth
                duration={500}
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Menu