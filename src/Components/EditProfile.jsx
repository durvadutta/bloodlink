import React, { useState } from "react";
import { Button } from "./ui/button";
import "../CssFiles/common.css";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { GiWeightScale } from "react-icons/gi";
import { FaRulerVertical } from "react-icons/fa6";
import { PiGenderIntersexFill } from "react-icons/pi";
import { BiSolidRename } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setAuthUser } from "@/redux/userSlice";

export default function EditProfile() {
  const majorCitiesInIndia = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Surat",
    "Visakhapatnam",
    "Patna",
    "Indore",
    "Coimbatore",
    "Vadodara",
    "Rajkot",
    "Bhopal",
    "Thane",
    "Agra",
    "Nashik",
    "Aurangabad",
    "Madurai",
    "Mysore",
  ];
  const user = useSelector((state) => state.userAuth.user);
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    name: user?.name,
    bloodType: user?.bloodType,
    gender: user?.gender,
    weight: user?.weight,
    height: user?.height,
    location :user?.location,
    dob: user?.dob ? user.dob.split('T')[0] : '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const editProfileHandler = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/profile/edit",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        const updatedUserData = {
          ...user,
          name: res.data.user?.name,
          gender: res.data.user?.gender,
          bloodType: res.data.user?.bloodType,
          weight: res.data.user?.weight,
          height: res.data.user?.height,
          location: res.data.user?.location,
          dob :res.data.user?.dob
        };
        dispatch(setAuthUser(updatedUserData));
        navigate(`/profile/${user?._id}`);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center bg-gray-100 min-h-[135vh]">
        <div className="content-container my-5 ">
          <div className="profile-container h-[15%] border bg-white flex px-5 py-2 shadow-lg rounded">
            <div className="flex items-center">
              <Avatar className="bg-red-500 flex justify-center items-center mx-4">
                <AvatarImage />
                <AvatarFallback>👤</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-bold text-black text-xl">
                  {user?.name || "NA"}
                </h1>
                <span>{user?.username || "NA"}</span>
              </div>
            </div>
          </div>
          <div className="info-container border bg-white shadow-lg rounded flex flex-col  items-center">
            <div className="w-[100%] gap-4 info-grid">
              <div className="flex items-center py-5 rounded-lg ">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <BiSolidRename />
                  </AvatarFallback>
                </Avatar>
                <span>Name</span>
                <Input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={formChangeHandler}
                  className=" focus-visible:ring-transparent m-2"
                />
              </div>

              <div className="flex items-center py-5 rounded-lg  ">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <i className="bi bi-droplet-fill text-lg"></i>
                  </AvatarFallback>
                </Avatar>
                <span>Blood Type</span>
                <Select
                  defaultValue={input.bloodType}
                  onValueChange={(value) =>
                    setInput({ ...input, bloodType: value })
                  }
                >
                  <SelectTrigger className="m-2 focus-visible:ring-transparent">
                    <SelectValue placeholder="Select your blood group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center py-5 rounded-lg">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <PiGenderIntersexFill
                      style={{ height: "1.5rem", width: "1.3rem" }}
                    />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span>Gender</span>
                  <RadioGroup
                    defaultValue={input.gender}
                    onValueChange={(value) =>
                      setInput({ ...input, gender: value })
                    }
                    className="flex my-2 text-gray-700 "
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="female"
                        id="r1"
                        className="bg-gray-100 border-gray-300 "
                      />
                      <Label htmlFor="r1" className="font-normal">
                        Female
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="male"
                        id="r2"
                        className="bg-gray-100 border-gray-300 "
                      />
                      <Label htmlFor="r2" className="font-normal">
                        Male
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex items-center py-5 rounded-lg">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <i className="bi bi-geo-alt-fill text-xl"></i>
                  </AvatarFallback>
                </Avatar>
                <span>Location</span>
                <Select defaultValue={input.location}
                  onValueChange={(value) =>
                    setInput({ ...input, location: value })
                  }>
                  <SelectTrigger className="m-2 focus-visible:ring-transparent">
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent className="">
                    {majorCitiesInIndia.map((city, index) => {
                      return (
                        <SelectItem key={index} value={city}>
                          {city}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center py-5 rounded-lg">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <i className="bi bi-calendar2-week-fill"></i>
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span>DOB</span>
                  <Input
                  type="date"
                  name="dob"
                  value={input.dob}
                  onChange={formChangeHandler}
                  className=" focus-visible:ring-transparent my-2"
                />
                </div>
              </div>

              <div className="flex items-center py-5 rounded-lg ">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <GiWeightScale
                      style={{ height: "1.2rem", width: "1.2rem" }}
                    />
                  </AvatarFallback>
                </Avatar>
                <span>weight</span>
                <Input
                  type="number"
                  name="weight"
                  value={input.weight}
                  onChange={formChangeHandler}
                  className=" focus-visible:ring-transparent m-2"
                />
                Kg
              </div>

              <div className="flex items-center py-5 rounded-lg">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <FaRulerVertical />
                  </AvatarFallback>
                </Avatar>
                <span>Height</span>
                <Input
                  type="number"
                  name="height"
                  value={input.height}
                  onChange={formChangeHandler}
                  className=" focus-visible:ring-transparent m-2"
                />{" "}
                cm
              </div>
            </div>

            <div className="w-[100%] p-4">
              {loading ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin " />
                  Please wait
                </Button>
              ) : (
                <Button onClick={editProfileHandler}>Save</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
