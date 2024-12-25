import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Button } from "./button";
import "@/CssFiles/page5.css";
import { Badge } from "./badge";
function Page5() {
  return (
    <>
      <div id="page5" className="flex">
        <div className="image-container2 flex  justify-center gap-4">
          <div className="  rounded-full image2 relative  bg-cover bg-center bg-no-repeat">
            <div className=" absolute bottom-0 right-0 rounded-full  bg-[#FF5E87]"></div>
          </div>
          <div className="relative top-14 rounded-full image2  bg-cover bg-center bg-no-repeat">
            <div className="rounded-full bg-[#8D60D6]"></div>
          </div>
        </div>
        <div className="faq flex flex-col accordion justify-center">
          <div>
            <Badge className="badge">F A Q</Badge>
          </div>

          <div className="elem4 ">
            <h1
              style={{
                fontFamily: '"Archivo Black", sans-serif',
              }}
              className="text-[2.5rem] font-semibold   "
            >
              Elevate your doubts
            </h1>
          </div>

          <div className="">
            {
              <Accordion type="single" defaultValue="item-1" collapsible>
                {[
                  {
                    question: "What is Donor Connect?",
                    answer:
                      "Donor Connect is a platform designed to connect blood donors with individuals in need of blood transfusions. It facilitates easy and quick communication between donors and recipients.",
                  },
                  {
                    question: "How do I register as a blood donor?",
                    answer:
                      "To register as a blood donor, simply create an account on Donor Connect, fill out your profile with your blood type and availability, and you'll be listed in our donor database.",
                  },
                  {
                    question: "Is there a fee to use Donor Connect?",
                    answer:
                      "No, Donor Connect is completely free to use for both donors and recipients.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index + 1}`}
                    className="border-none my-4"
                  >
                    <AccordionTrigger className=" px-5 bg-[#ffdde6] rounded-full">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="p-5 border-gray-300 border-x mx-5 my-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            }
          </div>
          <div>
            <Button className="rounded-full my-5">Know more</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page5;
