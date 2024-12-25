import React from "react";
import "@/CssFiles/about.css";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import img1 from "@/Assets/about1.png"
import img2 from "@/Assets/about2.png"
import img3 from "@/Assets/about3.png"
const About = () => {
  return (
    <>
      <div id="about">
        <section>
          <h1>Find blood donors
          with ease on BloodLink</h1>
          <div className="content">
            <p>
            At BloodLink, we believe in the power of community and the life-saving potential of blood donations. Our platform bridges the gap between blood donors and recipients, ensuring that those in urgent need can find help quickly and efficiently. By connecting nearby donors with receivers, we aim to make the process of donating and receiving blood more seamless, transparent, and accessible.
            </p>
            <Button className="rounded-full"> <Link to='/signup'> Register</Link> </Button>
          </div>
          <div className="img">
            <img
              src={img1}
              alt=""
            />
          </div>
        </section>
        <section>
          <h1>The Importance of Blood Donation</h1>
          <div className="content">
            <p>
            Blood donation is a simple, selfless act that can save lives. By donating blood, you provide hospitals and emergency centers with the essential supply they need to treat patients suffering from severe injuries, surgeries, and illnesses like cancer. Just one donation can make a life-changing difference for multiple recipients, ensuring that no one has to go without critical blood supplies in times of need. Every drop counts, and your contribution can be a beacon of hope for those in dire circumstances.
            </p>
            <a  href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/why-blood-donation-on-a-regular-basis-is-a-healthy-practice/articleshow/110985822.cms" className="text-purple-700 hover:text-red-700 font-bold underline" target="_blank">Read more</a>
          </div>
          <div className="img">
            <img
              src={img2}
              alt=""
            />
          </div>
        </section>
        <section>
          <h1>Understanding Blood Compatibility</h1>
          <div className="content">
            <p>
            Blood compatibility is crucial when it comes to blood transfusions. It ensures that the recipient's body can safely accept donated blood without complications. There are four main blood types: A, B, AB, and O, each of which can be positive or negative based on the Rh factor. Not all blood types are compatible with each other, and receiving the wrong type can cause severe immune reactions. For instance, type O-negative is considered a universal donor, while AB-positive can receive blood from any type. Knowing your blood type and understanding compatibility can help save lives during emergencies and planned transfusions.
            </p>
            <a href="https://www.hindustantimes.com/health/a-promising-technique-could-make-blood-types-mutually-compatible-101714855160088.html" className="text-purple-700 hover:text-red-700 font-bold underline" target="_blank"> Read more</a>
          </div>
          <div className="img">
            <img
              src={img3}
              alt=""
            />
          </div>
        </section>
        </div>
    </>
  );
};
export default About;
