import React from "react";
import "../CSSFiles/contact.css";
import Banner from "./ui/banner";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
export default function Contact() {
  return (
    <>
      <div id="contact">
        <Banner route="Contact" />
        <h3
          className="text-center mt-10 archivo text-[2rem]"
          style={{
            fontFamily: '"Archivo Black", sans-serif',
            marginBottom: "5vw",
          }}
        >
          Contact us
        </h3>

        <div className="row1-container ">
          <div className="box box-down cyan shadow-lg">
            <h2 className="mb-2 ">Our headquarters</h2>
            <p>Doon House, B-275(A), Lorem ipsum dolor sit amet., Haryana.</p>

            <div className="icon w-[5rem] h-[5rem] bg-[hsl(180_62%_55%)] rounded flex justify-center items-center m-2">
            <FaLocationDot className="text-[1.5rem] text-white"/>
            </div>
          </div>

          <div className="box red shadow-lg">
            <h2 className="mb-2">Our Contact</h2>
            <p>+91 9828585851</p>
            <p>+91 7576261585</p>
            <div className="icon w-[5rem] h-[5rem] bg-[hsl(0_78%_62%)] rounded flex justify-center items-center m-2">
              
            <BsFillTelephoneFill className="text-[1.5rem] text-white"/>
            </div>
          </div>

          <div className="box box-down blue shadow-lg">
            <h2 className="mb-2">Mail Us</h2>
            <p>info@bloodlink.com</p>
            <p>yahoo@samar.com</p>
            <div className="icon w-[5rem] h-[5rem] bg-[hsl(212_86%_64%)] rounded flex justify-center items-center m-2">
            <IoMail className="text-[1.5rem] text-white"/>
            </div>
          </div>
        </div>
        <div className="row2-container">
          <div className="box orange shadow-lg">
            <h2 className="mb-2">Our Corporate Office</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor.,
              paladium - 809514
            </p>
            <div className="icon w-[5rem] h-[5rem] bg-[hsl(34_97%_64%)] rounded flex justify-center items-center m-2">
            <FaLocationDot className="text-[1.5rem] text-white"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
