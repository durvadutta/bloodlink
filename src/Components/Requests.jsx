import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import axios from "axios";
import useGetUserRequests from "@/hooks/useGetUserRequests";
import { setUserRequests } from "@/redux/userSlice";
import { toast } from "sonner";
import "@/CssFiles/common2.css"

export default function Requests() {
  useGetUserRequests();
  const userRequests = useSelector((state) => state.userAuth.userRequests);
  if (!Array.isArray(userRequests)) {
    return <div>No users found.</div>;
  }
  const dispatch = useDispatch();

  const acceptRequest = async (userId) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/user/acceptRequests/${userId}`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        const updatedRequests = userRequests.filter(
          (user) => user._id !== userId
        );
        dispatch(setUserRequests(updatedRequests));
        toast.success(res.data.message);
      } else {
        console.log(error);

        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log("Error accepting request", error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="flex justify-center bg-gray-100 min-h-[89vh]">
        <div className="donors-container  bg-white m-5 flex flex-col items-center p-2 shadow-lg rounded">
        {userRequests.length > 0 ? (<h2 className="my-5 font-bold">User requests</h2>):(<h2 className="my-5 font-bold">No user requests</h2>)}

          {userRequests.map((user) => {
            return (
              <div
                key={user._id}
                className="donor-container shadow-lg rounded-xl w-[95%] flex justify-between py-2 my-2"
                style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center ">
                  <Link to={`/profile/${user?._id}`}>
                    <Avatar className="bg-black flex justify-center items-center mx-4 mt-1">
                      <AvatarImage />
                      <AvatarFallback>👤</AvatarFallback>
                    </Avatar>
                  </Link>

                  <div>
                    <div className="flex items-center">
                      <h1 className="font-semibold ">
                        <Link to={`/profile/${user?._id}`}>
                          {user?.name || "Name"}
                        </Link>
                      </h1>
                      <h1 className="text-xs mx-2">{user?.username}</h1>
                    </div>
                    <div>
                      <Badge className="bg-gray-200 text-black">
                        {user?.bloodType || "NA"}
                      </Badge>
                      <Badge className="ml-2 bg-gray-200 text-black">
                        {user?.gender || "NA"}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => acceptRequest(user._id)}
                  className="rounded-xl mt-2 ml-4"
                >
                  Accept
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
