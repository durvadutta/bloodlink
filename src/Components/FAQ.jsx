import React from "react";
import "../CSSFiles/faq.css";
import Banner from "./ui/banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQ() {
  const faqData1 = [
    {
      question: "What is BloodLink?",
      answer:
        "BloodLink is a platform designed to connect blood donors with individuals in need of blood transfusions. It facilitates easy and quick communication between donors and recipients.",
    },
    {
      question: "How do I register as a blood donor?",
      answer:
        "To register as a blood donor, simply create an account on BloodLink, fill out your profile with your blood type and availability, and you'll be listed in our donor database.",
    },
    {
      question: "Is there a fee to use BloodLink?",
      answer:
        "No, BloodLink is completely free to use for both donors and recipients.",
    },
    {
      question: "How is my personal information protected?",
      answer:
        "We take your privacy seriously. Your personal information is stored securely and is only shared with potential recipients or donors when necessary, and with your consent.",
    },
    {
      question: "How can I find a blood donor?",
      answer:
        "After creating an account, you can search for donors by blood type, location, and availability. Our system will connect you with the nearest compatible donors.",
    },
  ];
  const faqData2 = [
    {
      question: "What should I do after finding a donor?",
      answer:
        "Once you've found a suitable donor, you can contact them directly through our platform to arrange the details of the donation.",
    },
    {
      question: "What if I can no longer donate blood after registering?",
      answer:
        "If you're temporarily or permanently unable to donate blood, you can update your profile to reflect your current status. This will ensure that potential recipients know you are unavailable.",
    },
    {
      question: "How does BloodLink verify donor eligibility?",
      answer:
        "While BloodLink provides a platform for connection, we encourage donors and recipients to follow local health guidelines and medical advice to ensure donor eligibility.",
    },
    {
      question: "Can I donate blood if I have a medical condition?",
      answer:
        "This depends on the specific condition. We recommend consulting with your healthcare provider to determine if you're eligible to donate blood.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "Typically, you can donate whole blood every 56 days. However, the frequency may vary depending on the type of donation and local health guidelines. Always consult with your healthcare provider.",
    },
    {
      question:
        "What happens if I need urgent blood but can’t find a donor immediately?",
      answer:
        "If you need blood urgently and cannot find a donor right away, we recommend contacting local hospitals or blood banks, as they may have available supplies or can assist in finding a donor quickly. BloodLink is designed to help, but in emergencies, professional medical assistance is crucial.",
    },
  ];
  return (
    <>
      <Banner route="FAQ" />

      <h3
        className="text-center mt-10 text-[2rem]"
        style={{
          fontFamily: '"Archivo Black", sans-serif',
          marginBottom: "5vw",
        }}
      >
        Frequently asked questions
      </h3>
      <div className="flex-con">
        <div className="questions m-3">
          <Accordion type="single" defaultValue="item-1" collapsible>
            {faqData1.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-none my-4"
              >
                <AccordionTrigger className=" px-5 bg-[#ffdde6] rounded-full">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-5 border-x  border-gray-300 m-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="questions m-3">
          <Accordion type="single" collapsible>
            {faqData2.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-none my-4"
              >
                <AccordionTrigger className=" px-5 bg-[#ffdde6] rounded-full">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-5 border-x border-gray-300 m-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
