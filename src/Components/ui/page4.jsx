import React from "react";
import "@/CssFiles/page4.css";
import { Badge } from "./badge";

export default function Page4() {
  return (
    <>
      <div id="page4" className="w-full ">
        <div className="flex flex-col items-center my-10 ">
          <Badge className="badge">FEATURES</Badge>

          <div className="elem3 w-full relative overflow-hidden flex items-center justify-center">
            <h1
              style={{
                fontFamily: '"Archivo Black", sans-serif',
              }}
              className="absolute font-semibold "
            >
              Linking donors and
            </h1>
          </div>

          <div className="elem3 w-full relative overflow-hidden flex items-center justify-center">
            <h1
              style={{
                fontFamily: '"Archivo Black", sans-serif',
              }}
              className="font-semibold absolute text-center  leading-none"
            >
              receivers to save lives.
            </h1>
          </div>
        </div>
        <div className="row1-container">
          <div className="box shadow-lg cyan">
            <h2 className="mb-2 ">Easy Request System</h2>
            <p className="para">
              Create a blood request with essential details, and it will be
              instantly visible to our network of donors.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-supervisor.svg"
              alt=""
            />
          </div>

          <div className="box shadow-lg  red">
            <h2 className="mb-2">Real-Time Availability</h2>
            <p className="para">
              Let us assist in connecting you with geographically close
              individuals willing to spread hope and share Blood.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-team-builder.svg"
              alt=""
            />
          </div>

          <div className="box shadow-lg  blue">
            <h2 className="mb-2">Connect and Save Lives</h2>
            <p className="para">
              Coordinate with donors seamlessly through our app. Make a profound
              impact and inspire hope together.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-calculator.svg"
              alt=""
            />
          </div>
        </div>
        <div className="row2-container">
          <div className="box shadow-lg purple">
            <h2 className="mb-2">Track Your Requests</h2>
            <p className="para">
              Monitor your blood request status in real-time and track donor
              responses until fulfilled.
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-karma.svg"
              alt=""
            />
          </div>
          <div className="box shadow-lg maroon">
            <h2 className="mb-2">Secure Donor Profiles</h2>
            <p className="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto ratione rerum excepturi
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-karma.svg"
              alt=""
            />
          </div>
          <div className="box shadow-lg orange">
            <h2 className="mb-2">Mobile-Friendly Access</h2>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              est Lorem, ipsum dolor.donor
            </p>
            <img
              src="https://assets.codepen.io/2301174/icon-karma.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
