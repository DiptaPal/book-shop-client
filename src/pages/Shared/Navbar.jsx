import { NavLink } from "react-router-dom";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Navbar.css";

const navbars = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ABOUT US",
    path: "/about-us",
  },
  {
    name: "BOOKS",
    path: "/books",
  },
  {
    name: "NEW RELEASE",
    path: "/new-release",
  },
  {
    name: "CONTACT US",
    path: "/contact-us",
  },
  {
    name: "BLOG",
    path: "/blog",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="my-0 sx:my-8 flex justify-center items-center gap-14">
        <ul className="justify-center items-center text-sm sm:text-lg lg:text-lg hidden font-medium sx:flex">
          {navbars.map((navbar, index) => (
            <li
              key={index}
              className="border-[#D1D1D1] border-r-2 px-3 lg:px-12 first:pl-0 last:border-r-0 last:pr-0"
            >
              <NavLink
                to={navbar.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-extrabold"
                    : "hover:text-gray-500 duration-300"
                }
              >
                {navbar.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* menu button */}
        {/* <button
          className="text-2xl block md:hidden transition-all duration-500"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? <GrClose></GrClose> : <GrMenu></GrMenu>}
        </button> */}
      </div>

      {/* mobile device menu */}
      {/* <ul
        className={`text-lg flex flex-col justify-center items-center bg-[#FCEBEA] w-full sm:w-[60%] mx-auto text-black dark:bg-gray-600 lg:h-0 dark:text-white font-medium transition-[height] duration-500 overflow-hidden ${
          navbar ? "h-[440px]" : "h-0"
        }`}
      >
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
      </ul> */}

      {/* mobile device menu */}
      <div className="my-8 block sx:hidden">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            375: {
              slidesPerView: 3,
            },
            540: {
              slidesPerView: 4,
            },
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="font-medium text-center"
        >
          {navbars.map((navbar, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <NavLink
                to={navbar.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-extrabold"
                    : "hover:text-gray-500 duration-300"
                }
              >
                {navbar.name}
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Navbar;
