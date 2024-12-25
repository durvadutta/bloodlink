import React from "react";
import { Button } from "./button";
import "@/CssFiles/page2.css";
import { Badge } from "./badge";
import { Link } from "react-router-dom";
function Page2() {
  return (
    <>
      <div id="page2" className=" flex">
        <div className="image-container flex  justify-center ">
          <div className="border rounded-full image1 relative bg-cover bg-center bg-no-repeat">
            <div className=" absolute bottom-0 right-0 rounded-full bg-[#FF5E87]"></div>
          </div>
          <div className="border relative top-14 rounded-full image1 bg-cover bg-center bg-no-repeat">
            <div className=" rounded-full bg-[#8D60D6]"></div>
          </div>
        </div>
        <div className="flex flex-col info justify-center">
          <div>
            <Badge className="badge">ABOUT US</Badge>
          </div>

          <div className="elem1 w-full relative overflow-hidden flex items-center">
            <h1
              style={{
                fontFamily: '"Archivo Black", sans-serif',
              }}
              className=" font-semibold  tracking-tight "
            >
              Find blood donors
            </h1>
          </div>

          <div className="elem1 w-full relative overflow-hidden flex items-center">
            <h1
              style={{
                fontFamily: '"Archivo Black", sans-serif',
              }}
              className=" font-semibold  leading-none "
            >
              with ease on BloodLink
            </h1>
          </div>
          <p className="text-[hsl(230_7%_35%)] my-5 ">
            At BloodLink, we believe in the power of community and the
            life-saving potential of blood donations. Our platform bridges the
            gap between blood donors and recipients, ensuring that those in
            urgent need can find help quickly and efficiently. By connecting
            nearby donors with receivers, we aim to make the process of donating
            and receiving blood more seamless, transparent, and accessible.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae! Voluptate voluptatem officiis, non officia inventore laborum nostrum nam corporis?
          </p>
          <div>
            <Button className="rounded-full my-5">
              <Link to="/about">Know more</Link>
              </Button><u><u></u></u>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page2;
