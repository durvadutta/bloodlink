import React from "react";
import "@/CSSFiles/banner.css";
import { Link } from "react-router-dom";

export default function Banner({route}) {
  return (
    <>
      <div className="banner-container bg-cover bg-no-repeat bg-top h-[50vh] flex flex-col justify-end items-start font-['Chelsea_Market'] font-medium text-white  p-5" >
        <h1 className="mx-5 text-[2rem]">{route}</h1>
        <ul className="flex mx-5 my-2 text-[1.2rem]">
          <li className="mr-5 ">
            <Link to="/" className="text-white hover:text-red-500">
              <i className="bi bi-house-door "></i> Home
            </Link>
          </li>
          / &nbsp; &nbsp;
          <li className="text-red-500">{route}</li>
        </ul>
      </div>
    </>
  );
}
