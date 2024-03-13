import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact Me",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center h-20 text-white bg-black px-5">
        <h1 className="text-3xl font-style ">Portfolio</h1>
        {/* <FaHamburger className="w-8 h-8" /> */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium capitalize text-gray-500 hover:scale-105 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer w-8 h-8  z-10 text-gray-500 md:hidden"
        >
          {nav ? (
            <FaTimes className="w-8 h-8" />
          ) : (
            <GiHamburgerMenu className="w-8 h-8" />
          )}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-800 bg-black">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="py-4 text-3xl cursor-pointer font-medium capitalize text-gray-500 hover:scale-105 duration-200"
              >
        <Link to={link.toLowerCase()}>{link}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NavBar;
