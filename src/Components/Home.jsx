import React from "react";
import Page1 from "./ui/page1";
import Page3 from "./ui/page3";
import Page2 from "./ui/page2";
import Page4 from "./ui/page4";
import Page5 from "./ui/page5";
import ItemCarousel from "./ui/slider";
import "@/CssFiles/Home.css";
export default function Home() {
  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <ItemCarousel />
      
      <div className="flex justify-center items-end">
        <div className="border-b-4 border-gray-700 h-8 w-[15vw]"></div>
      </div>
    </>
  );
}
