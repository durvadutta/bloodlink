import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

export default function SignupW() {
  const [formData, setFormData] = useState({
    username: "",name: "",email: "",bloodType: "",gender: "",password: "",dob :""});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
        setFormData({username: "",name: "",email: "",bloodType: "",gender: "",password: "",dob:""});
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center w-screen h-screen justify-center">
        <form
          onSubmit={submitHandler}
          className="shadow-lg flex flex-col gap-5 p-8 bg-white rounded-lg"
        >
          {currentStep === 1 && (
            <SignupForm1
              formData={formData}
              handleInputChange={handleInputChange}
              nextStep={nextStep}
            />
          )}
          {currentStep === 2 && (
            <SignupForm2
              formData={formData}
              handleInputChange={handleInputChange}
              prevStep={prevStep}
              loading={loading}
              setFormData={setFormData}
            />
          )}
        </form>
      </div>
    </>
  );
}

const SignupForm1 = ({ formData, handleInputChange, nextStep }) => {
  return (
    <>
      <div className="mt-4 mb-1">
        <h1 className="text-center font-bold text-xl my-4">BloodLink</h1>
        <p className="text-center text-sm w-[18rem]">Step 1</p>
      </div>
      <div>
        <span className="font-medium">Username</span>
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className=" focus-visible:ring-transparent my-2"
          placeholder="eg. liliana850"
        />
      </div>

      <div>
        <span className="font-medium">Name</span>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className=" focus-visible:ring-transparent my-2"
          placeholder="eg. Liliana Jonas"
        />
      </div>
      <div>
        <span className="font-medium">Email</span>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className=" focus-visible:ring-transparent my-2"
          placeholder="eg. lilianajonas@gmail.com"
        />
      </div>
      <Button type="button" onClick={nextStep}>
        Next
      </Button>

      <span className="text-center text-sm">
        Already have an account? &nbsp;
         <Link className="text-blue-600" to="/login">
          Login
        </Link>
      </span>
    </>
  );
};

const SignupForm2 = ({
  formData,
  handleInputChange,
  prevStep,
  loading,
  setFormData,
}) => {
  return (
    <>
      <div className="mt-4 mb-1">
        <h1 className="text-center font-bold text-xl my-4">BloodLink</h1>
        <p className="text-center text-sm w-[18rem]">Step 2</p>
      </div>
      <div>
        <span className="font-medium">Username</span>
        <Select
          onValueChange={(value) =>
            setFormData({ ...formData, bloodType: value })
          }
        >
          <SelectTrigger className="my-2">
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
      <div>
        <span className="font-medium">Date of birth</span>
        <Input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          className=" focus-visible:ring-transparent my-2"
        />
      </div>
      <div>
        <span className="font-medium">Gender</span>
        <RadioGroup
          onValueChange={(value) => setFormData({ ...formData, gender: value })}
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
      <div>
        <span className="font-medium">Password</span>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className=" focus-visible:ring-transparent my-2"
        />
      </div>
      <div className="flex justify-between">
        <Button type="button" onClick={prevStep}>
          Back
        </Button>
        {loading ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin " />
            Please wait
          </Button>
        ) : (
          <Button type="submit">Sign up</Button>
        )}
      </div>
      <span className="text-center text-sm">
        Already have an account?{" "}
        <Link className="text-blue-600" to="/login">
          Login
        </Link>{" "}
      </span>
    </>
  );
};
