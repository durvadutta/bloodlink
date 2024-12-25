import React from "react";
import "@/CssFiles/page1.css";
import videoBg from "@/Assets/background.mp4";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { useSelector } from "react-redux";
export default function Page1() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <div id="page1" className="w-full  relative">
        <video
          className="object-cover absolute w-full h-full"
          src={videoBg}
          autoPlay
          loop
          muted
        ></video>
        <div className=" overlay w-full bg-[rgb(0_0_0_/_50%)] absolute flex flex-col justify-around ">
          <div className="h-full mx-[5%]  design ">
            <div className="text-part text-white flex flex-col  ">
              <h1
                className="text  font-bold leading-tight"
                style={{ fontFamily: '"Archivo Black", sans-serif' }}
              >
                "Give the Gift of Life – Donate Blood Today."
              </h1>
              <p className=" leading-tight mt-5 ">
                A platform for Connecting with others to save lives via blood
              </p>
              <div className="flex  gap-4 button-group">
                <Link to="/signup">
                  <Button className="rounded-full bg-red-700 hover:bg-red-800">
                    Register as Donor
                  </Button>
                </Link>

                {isLoggedIn ? (
                  <Link to="/suggested">
                    <Button className="rounded-full bg-black hover:bg-gray-900 ">
                      Available Donors
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button className="rounded-full bg-black hover:bg-gray-900">
                      Available Donors
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            <div className="images-part flex  justify-center">
              <div className=" rounded-full  relative  image bg-cover bg-center bg-no-repeat">
                <div className=" absolute bottom-0 right-0 rounded-full bg-[#FF5E87]"></div>
              </div>
              <div className=" relative top-14 rounded-full image bg-cover bg-center bg-no-repeat">
                <div className=" rounded-full bg-[#8D60D6]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
