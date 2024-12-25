import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import "@/CssFiles/slider.css";
import { Badge } from "./badge";
const ItemCarousel = () => {
  const reviews = [
    {
      name: "Sara",
      username: "sarika985",
      review:
        "Officia laudantium nostrum debitis adipisci consectetur reiciendis explicabo mollitia quaerat numquam, magni architecto ",
    },
    {
      name: "Jasmina",
      username: "jasmine985",
      review:
        "Officia laudantium nostrum debitis adipisci consectetur reiciendis explicabo mollitia quaerat numquam, magni architecto ",
    },
    {
      name: "Mina",
      username: "mina985",
      review:
        "Officia laudantium nostrum debitis adipisci consectetur reiciendis explicabo mollitia quaerat numquam, magni architecto ",
    },
    {
      name: "Shree",
      username: "s985",
      review:
        "Officia laudantium nostrum debitis adipisci consectetur reiciendis explicabo mollitia quaerat numquam, magni architecto ",
    },
    {
      name: "SHreya",
      username: "shreya",
      review:
        "Officia laudantium nostrum debitis adipisci consectetur reiciendis explicabo mollitia quaerat numquam, magni architecto ",
    },
    {
      name: "Sarati",
      username: "saru",
      review:
        "Officia laudantium nostrum debitis adipisci consectetur reiciendis explicabo mollitia quaerat numquam, magni architecto ",
    },
    {
      name: "Monika",
      username: "monika81",
      review:
        "Officia laudantium nostrum debitis adipisci consectetur reiciendis explicabo mollitia quaerat numquam, magni architecto ",
    },
    {
      name: "Ankit",
      username: "ankitjehar",
      review:
        "Officia laudantium nostrum debitis adipisci consectetur reiciendis explicabo mollitia quaerat numquam, magni architecto ",
    },
  ];

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust number of images for tablet/laptop size
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 888,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2, // Adjust for smaller screens (mobile)
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Adjust for very small screens (phones)
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="page6">
       <div className="flex flex-col items-center my-10 ">
          <Badge className="badge">TESTIMONIALS</Badge>

          <div className="elem3 w-full relative overflow-hidden flex items-center justify-center">
            <h1
              style={{
                fontFamily: '"Archivo Black", sans-serif',
              }}
              className="absolute font-semibold "
            >
              What our users
            </h1>
          </div>

          <div className="elem3 w-full relative overflow-hidden flex items-center justify-center">
            <h1
              style={{
                fontFamily: '"Archivo Black", sans-serif',
              }}
              className="font-semibold absolute text-center  leading-none"
            >
              says about us
            </h1>
          </div>
        </div>
      <div className="slider">
        <Slider {...settings}>
          {reviews.map((item) => (
            
              <article
                key={item.username}
                className=" flex flex-col items-center p-5  border-t-[3px] border-[hsl(280_87%_65%)] text-center text-[#f1f3f3]  rounded-lg shadow-lg m-[2vw] "
              >
                <Avatar className=" flex justify-center items-center h-[50px] w-[50px]">
                  <AvatarImage />
                  <AvatarFallback>👤</AvatarFallback>
                </Avatar>
                <h2 className="text-black">{item.name}</h2>
                <small className="text-gray-500">@{item.username}</small>

                <p style={{ color: "#414349" }} className="mt-2">
                  " {item.review}"
                </p>
              </article>
            
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ItemCarousel;
