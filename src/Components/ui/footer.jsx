import React, { useEffect } from "react";
import "@/CssFiles/footer.css";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="mt-[10vh]" id="footer">
      <footer>
        <div
          className=" bg-[#1c1f2f] pt-[30px] pb-[20px] "
          style={{ fontFamily: "rubik" }}
        >
          <div className="pt-8"></div>
          <div className="mx-auto ">
            <div className="flex flex-wrap justify-center mx-[2vw]">
              <div className="lg:w-1/4 w-full mb-6 px-[2vw]">
                <div>
                  <h5 className="footer-title text-lg font-semibold">
                    Address
                  </h5>
                  <div>
                    <div className="text-gray-300">
                      Corporate Office :<br /> Doon House, B-275(A), Lorem ipsum
                      dolor sit amet., Haryana.
                    </div>
                    <div className="text-gray-300 mt-4">
                      Phone:
                      <a href="tel:+919122151531" className="text-blue-500">
                        +91-9122151531
                      </a>
                    </div>
                    <div className="text-gray-300 mt-4">
                      Reg. Office :<br /> Doon House, D2/3, 4th Floor, Lorem
                      ipsum dolor sit amet consectetur. Jharkhand.
                    </div>
                    <div className="text-gray-300 mt-4">
                      Phone:{" "}
                      <a href="tel:+919122511111" className="text-blue-500">
                        +91-9122511111
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 w-full mb-6 px-[2vw]">
                <div>
                  <h5 className="footer-title text-lg font-semibold">
                    Recent News
                  </h5>
                  <ul className="text-gray-300">
                    <li className=" mb-2">
                      <div className="text-gray-300">
                        <div>
                          <a href="#">Want to work with us?</a>
                        </div>
                        <div className="text-blue-600">Call +91-9122588799</div>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="text-gray-300">
                        <div>
                          <a href="#">
                            Now we have customer support 24*7 available!
                          </a>
                        </div>
                        <div className="text-blue-600">
                          Call +91-9122588799, +91-9122588799
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="text-gray-300">
                        <div>
                          <a href="#">
                            We are raising funds for charity, support us
                          </a>
                        </div>
                        <div className="text-blue-600">
                          Call +91-9122588799, +91-9122588799
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/4 w-full mb-6 px-[2vw]">
                <div>
                  <h5 className="footer-title text-lg font-semibold">
                    Email Us
                  </h5>
                  <div>
                    <form method="post" className="wpcf7-form">
                      <div>
                        <p>
                          <input
                            type="text"
                            name="your-first-name"
                            className="w-full p-2 border border-gray-300 rounded-md my-1"
                            placeholder="Your name"
                          />
                        </p>
                        <p>
                          <input
                            type="email"
                            name="your-email_1"
                            className="w-full p-2 border border-gray-300 rounded-md my-1"
                            placeholder="Your email"
                          />
                        </p>
                        <p>
                          <textarea
                            name="your-message"
                            cols="40"
                            rows="5"
                            className="w-full p-2 border border-gray-300 rounded-md my-1"
                            placeholder="Your message"
                          ></textarea>
                        </p>
                        <div>
                          <input
                            type="submit"
                            value="Send"
                            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" bg-[#181828] text-white py-4 "
          style={{ fontFamily: "rubik" }}
        >
          <div className="mx-auto w-[90%]">
            <div className="flex flex-wrap justify-between">
              <div className="w-full lg:w-1/4 text-center lg:text-left">
                <div className="text-[92.86%] pt-[10px]">2024 © BloodLink</div>
              </div>
              <div className="w-full lg:w-1/2 text-center">
                <nav id="footer-navigation">
                  <ul
                    id="footer-menu"
                    className="flex justify-center space-x-4"
                  >
                    <li>
                      <a href="#" className="text-blue-400">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="text-blue-400">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="w-full lg:w-1/4 text-center lg:text-right">
                <div>
                  <div className="inline-flex space-x-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="socials-item"
                    >
                      <FaSquareFacebook className="text-white" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="socials-item"
                    >
                      <FaSquareTwitter className="text-white" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="socials-item"
                    >
                      <FaSquareInstagram className="text-white" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="socials-item"
                    >
                      <FaSquareYoutube className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
