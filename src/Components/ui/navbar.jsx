import React, { useState, useEffect } from "react";
import "@/CssFiles/navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { Button } from "./button";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { IoMdNotifications } from "react-icons/io";
import useGetRTN from "@/hooks/useGetRTN";

export default function Navbar({ className }) {
  useGetRTN();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.userAuth.user);
  const reqNotification = useSelector((state) => state.rtn.reqNotification);
  console.log(reqNotification);

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [isSmallScreen, setisSmallScreen] = useState(window.innerWidth < 600);
  useEffect(() => {
    const handleResize = () => {
      setisSmallScreen(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  };

  const [isScrolledToPage2, setIsScrolledToPage2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const page2Element = document.getElementById("page2");

      if (page2Element) {
        const page2Top =
          page2Element.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY >= page2Top - window.innerHeight / 8) {
          setIsScrolledToPage2(true);
        } else {
          setIsScrolledToPage2(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`nav flex justify-between items-center z-[1000] w-full  font-semibold text-white ${className} ${
          isScrolledToPage2 ? "bg-[rgb(0_0_0_/_50%)]" : ""
        } `}
      >
        <div className="nav-toggle ">
          <Button
            className="bg-transparent hover:bg-transparent font-bold"
            onClick={toggleSidebar}
          >
            ☰
          </Button>
        </div>

        <div className="website-name text-[1.5rem] text-white">BloodLink</div>
        <ul className="navbar-elements items-center ">
          {[
            { name: "home", path: "/" },

            { name: "about us", path: "/about" },
            { name: "contact", path: "/contact" },
            { name: "faq", path: "/faq" },
          ].map((item, index) => (
            <li key={index} className="uppercase mx-2 px-2 text-[0.9rem]">
              <Link className="text-white hover:text-red-500" to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          {isLoggedIn ? (
            <>
              <Link to={`/profile/${user?._id}`}>
                <FaUser className="mx-2 hover:text-red-800" />
              </Link>
              <Link to="/chat">
                <BiSolidMessageRoundedDots className="mx-2 h-6 w-6 hover:text-red-800" />
              </Link>
              
            </>
          ) : (
            <>
              <Link to="/login">
                <button
                  style={{ textUnderlineOffset: "2px" }}
                  className={`hover:text-red-600 underline mx-2 ${
                    isSmallScreen ? "text-sm" : ""
                  }`}
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  style={{ textUnderlineOffset: "2px" }}
                  className={`hover:text-red-600 underline mx-2 ${
                    isSmallScreen ? "text-sm" : ""
                  }`}
                >
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>

      <div
        className={`sidebar fixed h-full bg-[#111111ec] z-[100] w-[800px]   ${
          sidebarOpen ? "open " : ""
        }`}
      >
        <ul className="p-5 relative top-20">
          {[
            { name: "home", path: "/" },

            { name: "about us", path: "/about" },
            { name: "contact", path: "/contact" },
            { name: "faq", path: "/faq" },
          ].map((item, index) => (
            <li
              key={index}
              className="uppercase mx-2 my-4 px-2 text-[0.9rem] text-white hover:text-red-600"
              onClick={toggleSidebar}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
