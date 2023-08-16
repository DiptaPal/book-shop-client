import { NavLink } from "react-router-dom";
import { GrClose, GrMenu } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  console.log(navbar);

  return (
    <>
      <div className="my-8 flex justify-center items-center gap-14">
        <ul className="justify-center items-center text-lg hidden font-medium lg:flex">
          <li className="border-[#D1D1D1] border-r-2 pr-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="border-[#D1D1D1] border-r-2 px-12">
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li className="border-[#D1D1D1] border-r-2 px-12">
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              BOOKS
            </NavLink>
          </li>
          <li className="border-[#D1D1D1] border-r-2 px-12">
            <NavLink
              to="/new-release"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              NEW RELEASE
            </NavLink>
          </li>
          <li className="border-[#D1D1D1] border-r-2 px-12">
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              CONTACT US
            </NavLink>
          </li>
          <li className="pl-12">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              BLOG
            </NavLink>
          </li>
        </ul>


        {/* menu button */}
        <button
          className="text-2xl block lg:hidden transition-all duration-500"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? <GrClose></GrClose> : <GrMenu></GrMenu>}
        </button>
      </div>




      {/* mobile device menu */}
      {(
        <ul className={`text-lg flex flex-col justify-center items-center bg-[#FCEBEA] w-full sm:w-[60%] mx-auto text-black dark:bg-gray-600 lg:h-0 dark:text-white font-medium transition-[height] duration-500 overflow-hidden ${navbar ? 'h-[440px]' : 'h-0'}`}>
          <li className="border-b-2 border-[#D1D1D1] py-5 w-full flex justify-center items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="border-b-2 border-[#D1D1D1] py-5 w-full flex justify-center items-center">
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li className="border-b-2 border-[#D1D1D1] py-5 w-full flex justify-center items-center">
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              BOOKS
            </NavLink>
          </li>
          <li className="border-b-2 border-[#D1D1D1] py-5 w-full flex justify-center items-center">
            <NavLink
              to="/new-release"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              NEW RELEASE
            </NavLink>
          </li>
          <li className="border-b-2 border-[#D1D1D1] py-5 w-full flex justify-center items-center">
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              CONTACT US
            </NavLink>
          </li>
          <li className="py-5">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-extrabold"
                  : "hover:text-gray-500 duration-300"
              }
            >
              BLOG
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
