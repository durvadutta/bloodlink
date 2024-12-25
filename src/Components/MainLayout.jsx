import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./ui/Navbar";
import Footer from "./ui/footer";
export default function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isGrayNav = ["/faq", "/contact"].includes(location.pathname);
  const navClass = isHomePage? "fixed": isGrayNav? "fixed bg-[rgb(0_0_0_/_70%)]": "bg-black";
  return (
    <>
      <Navbar className={navClass} />
      <div>
        <Outlet /> {/* This will render the child components */}
      </div>
      <Footer />
    </>
  );
}
