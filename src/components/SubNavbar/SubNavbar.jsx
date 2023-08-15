import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { LiaSearchSolid } from "react-icons/lia";
import {
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/features/darkMode/darkModeSlice";
import { useEffect } from "react";

const SubNavbar = () => {
  const { theme } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const element = document.documentElement;
   const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(darkQuery);
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];

  const onWindowMatch = () => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)){
      element.classList.add("dark");
    }
    else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [element.classList, theme]);
  return (
    <div>
      <div className="bg-[#393280] text-white px-0 py-4 text-[22px] flex flex-col gap-5 justify-between items-center md:px-16 md:flex-row md:gap-0">
        <div className="flex items-center gap-2">
          <BsTelephoneFill></BsTelephoneFill>
          <p>+880 123 456 789</p>
        </div>
        <div className="flex items-center gap-8">
          <Link to="https://www.facebook.com/">
            <BiLogoFacebook></BiLogoFacebook>
          </Link>
          <Link to="https:/instagram.com/">
            <BiLogoInstagram></BiLogoInstagram>
          </Link>
          <Link to="https:/linkedin.com">
            <BiLogoLinkedin></BiLogoLinkedin>
          </Link>
          <Link to="https:/twitter.com">
            <BiLogoTwitter></BiLogoTwitter>
          </Link>
          <Link to="https:/github.com">
            <BiLogoGithub></BiLogoGithub>
          </Link>
        </div>
      </div>
      <div className="flex justify-between flex-col gap-5 px-0 lg:flex-row lg:gap-0 items-center md:px-16 dark:bg-gray-600 py-6 duration-300">
        <Link to="/">
          <div className="w-[60px] h-[60px]">
            <img className="w-full" src={logo} alt="" />
          </div>
        </Link>
        <div
          className="bg-[#F6F6F6] rounded-[20px] flex items-center
        px-6"
        >
          <input
            className="bg-transparent outline-none rounded-[20px] h-[45px] w-auto xl:w-[400px] 2xl:w-[600px] placeholder:text-[#BCBCBC] placeholder:text-sm duration-300"
            type="text"
            placeholder="Search books"
          />
          <button className="text-[18px]">
            <LiaSearchSolid></LiaSearchSolid>
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-0 duration-300">
          <Link to="/">
            <div className="flex items-center gap-4 px-4 text-[#393280] dark:text-white font-semibold text-xl md:text-sm">
              <AiOutlineUser></AiOutlineUser>
              <p>ACCOUNT</p>
            </div>
          </Link>
          <Link to="/">
            <div className="flex items-center gap-4 px-4 text-[#393280] dark:text-white font-semibold text-xl md:text-sm border-x-2 border-none md:border-[#D1D1D1]">
              <AiOutlineShopping></AiOutlineShopping>
              <p>CART:(0$)</p>
            </div>
          </Link>
          <Link to="/">
            <div className="flex items-center gap-4 px-4 text-[#393280] dark:text-white font-semibold text-xl md:text-sm border-r-2 border-none md:border-[#d1d1d1] ">
              <AiOutlineHeart></AiOutlineHeart>
              <p>WISHLIST</p>
            </div>
          </Link>
          <div>
            {options.map((option) => (
              <button
                key={option.text}
                onClick={() => dispatch(setTheme(option.text))}
                className={`w-8 h-9 leading-9 text-xl rounded-full m-1 ${
                  theme === option.text ? "text-sky-500" : "dark:text-white"
                }`}
              >
                <ion-icon name={option.icon}></ion-icon>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
