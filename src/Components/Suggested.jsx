import useGetSuggestedUsers from "@/hooks/useGetSuggestedUsers";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import axios from "axios";
import { toast } from "sonner";
import { setRequestsSent } from "@/redux/userSlice";
import "@/CssFiles/common2.css"

export default function Suggested() {
  useGetSuggestedUsers();
  const dispatch = useDispatch();
  const suggestedUsers = useSelector((state) => state.userAuth.suggestedUsers);
  const requestsSent = useSelector((state) => state.userAuth.requestsSent);
  if (!Array.isArray(suggestedUsers)) {
    return <div>No users found.</div>;
  }
  const sendRequest = async (userId) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/user/reqOrCancel/${userId}`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        
        toast.success(res.data.message);

        if (res.data.isRequestSent) {
          dispatch(setRequestsSent([...requestsSent, userId])); // Add userId to requestsSent
        } else {
          dispatch(setRequestsSent(requestsSent.filter((id) => id !== userId))); // Remove userId from requestsSent
        }
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="flex justify-center bg-gray-100 min-h-[89vh]">
        <div className="donors-container  bg-white m-5 flex flex-col items-center p-2 shadow-lg rounded">
          {suggestedUsers.length > 0 ? (<h2 className="my-5 font-bold">Suggested Users</h2>):(<h2 className="my-5 font-bold">No suggested Users</h2>)}
          

          {suggestedUsers.map((user) => {
            const isRequested = requestsSent.includes(user._id);
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
                      <Badge className="bg-gray-200 text-black mt-2 text-sm">
                      {user?.bloodType || 'NA'}
                      </Badge>
                      <Badge className="ml-2 bg-gray-200 text-black mt-2 text-sm">
                        {user?.gender || "NA"}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => sendRequest(user?._id)}
                  className="rounded-xl mt-2 ml-4"
                >
                  {isRequested ? "Cancel Request" : " Request"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
