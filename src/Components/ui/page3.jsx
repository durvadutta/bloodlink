import React from "react";
import "@/CssFiles/Page3.css";
import { Badge } from "./badge";
import img1 from "@/Assets/img1.jpg";
import img2 from "@/Assets/img2.jpg";
import img3 from "@/Assets/img3.jpg";

export default function Page3() {
  return (
    <>
      <div id="page3" className="">
        <div className="flex flex-col items-center  ">
          <Badge className="badge">HOW IT WORKS</Badge>
          <div className="header-margin">
            <div className="elem2 w-full relative flex justify-center items-center overflow-hidden">
              <h1
                style={{
                  fontFamily: '"Archivo Black", sans-serif',
                }}
                className="font-semibold absolute  "
              >
                BloodLink connects you
              </h1>
            </div>

            <div className="elem2 w-full relative flex justify-center items-center overflow-hidden">
              <h1
                style={{
                  fontFamily: '"Archivo Black", sans-serif',
                }}
                className=" font-semibold  text-center  leading-none "
              >
                with nearby blood donors
              </h1>
            </div>
          </div>
        </div>
        <div className="item-container">
          <div className="img-container mt-[3vw]">
            <div className="card-image-item rounded-xl  bg-cover bg-center bg-no-repeat shadow-lg  rounded img1 relative">
              <img
                className="w-full h-full rounded-xl "
                src={img1}
                alt="some image"
              />
              <div className="rounded-full absolute bg-[#FF5E87]"></div>
            </div>

            <div className="card-image-item rounded-xl bg-cover bg-center bg-no-repeat shadow-lg relative rounded img2">
              <img
                className="w-full h-full rounded-xl"
                src={img2}
                alt="some image"
              />
              <div className="rounded-full absolute bg-[#8D60D6]"></div>
            </div>

            <div className="card-image-item rounded-xl bg-cover bg-center bg-no-repeat relative shadow-lg img3">
              <img
                className="w-full h-full rounded-xl"
                src={img3}
                alt="some image"
              />
              <div className="rounded-full absolute bg-[#FF5E87]"></div>
            </div>
          </div>
          <div className="text-container ">
            <div className="p-4 text-item">
              <h4 className=" tracking-tight my-2">Raise a Request</h4>
              <p className="text-[hsl(230_7%_35%)]">
                Create a blood request with essential details, and it will be
                instantly visible to our network of donors.
              </p>
            </div>
            <div className="pl-[5vw] text-item">
              <h4 className=" tracking-tight my-2">Find Nearby donors</h4>
              <p className=" text-[hsl(230_7%_35%)]">
                Let us assist in connecting you with geographically close
                individuals willing to spread hope and share Blood.
              </p>
            </div>

            <div className=" p-4 text-item">
              <h4 className=" tracking-tight my-2">Connect and Save Lives</h4>
              <p className="text-[hsl(230_7%_35%)]">
                Coordinate with donors seamlessly through our app. Make a
                profound impact and inspire hope together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
