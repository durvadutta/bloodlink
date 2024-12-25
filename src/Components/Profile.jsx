import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/AuthSlice";
import { setAuthUser } from "@/redux/userSlice";
import "../CssFiles/common.css";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { GiWeightScale } from "react-icons/gi";
import { FaRulerVertical } from "react-icons/fa6";
import { PiGenderIntersexFill } from "react-icons/pi";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import useGetConnectedUsers from "@/hooks/useGetConnectedUsers";

function Profile() {
  useGetConnectedUsers();
  const connectedUsers = useSelector((state) => state.userAuth.connectedUsers);

  const params = useParams();
  const userId = params.id;
  useGetUserProfile(userId);

  const userProfile = useSelector((state) => state.userAuth.userProfile);
  const user = useSelector((state) => state.userAuth.user);
  const isLoggedInUser = userProfile?._id === user?._id;

  // console.log(userProfile);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shadow = {
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };
  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setAuthUser(null));
        dispatch(logout());
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="flex justify-center bg-gray-100 ">
        <div className="content-container ">
          <div className="h-auto border bg-white my-[2rem] px-5 py-2 shadow-lg rounded">
            <div className="profile-container flex my-2 h-[15vh]">
              <div className="flex items-center">
                <Avatar className="bg-red-500 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>👤</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="font-bold text-black  ">
                    {userProfile?.name || "NA"}
                  </h1>
                  <span>{userProfile?.username || "NA"}</span>
                </div>
              </div>
              <div>
                {isLoggedInUser ? (
                  <Link to="/account/edit">
                    {" "}
                    <Button className="ml-4">Edit</Button>
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div>
              {isLoggedInUser ? (
                <>
                  <Button
                    variant="secondary"
                    className="m-1 bg-red-100 hover:bg-red-200"
                  >
                    <Link to="/user-requests">Requests</Link>
                  </Button>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="secondary"
                        className="m-1 bg-red-100 hover:bg-red-200"
                      >
                        My connections
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      {connectedUsers && connectedUsers.length > 0 ? (
                        connectedUsers.map((user) => {
                          return (
                            <div key={user?._id} className="flex items-center">
                              <Avatar className="flex items-center justify-center bg-red-100 my-1 mx-2 ">
                                <AvatarFallback className="font-bold">
                                  {user?.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <p className="font-semibold">
                                <Link to={`/profile/${user?._id}`}>
                                  {user?.name || "Name"}
                                </Link>
                              </p>
                            </div>
                          );
                        })
                      ) : (
                        <p>No connected users found.</p>
                      )}
                    </PopoverContent>
                  </Popover>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="info-container border bg-white shadow-lg rounded flex flex-col  items-center">
            <div className="w-[100%] gap-4 info-grid">
              <div style={shadow} className="flex items-center py-5 rounded-lg">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <i className="bi bi-envelope-fill"></i>
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span>Email</span>
                  <h1 className="font-bold text-black  ">
                    {userProfile?.email || "NA"}
                  </h1>
                </div>
              </div>
              <div style={shadow} className="flex items-center py-5 rounded-lg">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <i className="bi bi-droplet-fill text-lg"></i>
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span>Blood Type</span>
                  <h1 className="font-bold text-black  ">
                    {userProfile?.bloodType || "NA"}
                  </h1>
                </div>
              </div>
              <div style={shadow} className="flex items-center py-5 rounded-lg">
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
                  <h1 className="font-bold text-black  ">
                    {userProfile?.gender || "NA"}
                  </h1>
                </div>
              </div>
              <div style={shadow} className="flex items-center py-5 rounded-lg">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <i className="bi bi-geo-alt-fill  "></i>
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span>Location</span>
                  <h1 className="font-bold text-black  ">
                    {userProfile?.location || "NA"}
                  </h1>
                </div>
              </div>
              <div style={shadow} className="flex items-center py-5 rounded-lg">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <i className="bi bi-calendar2-week-fill"></i>
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span>DOB</span>
                  <h1 className="font-bold text-black  ">
                    {userProfile?.dob || "NA"}
                  </h1>
                </div>
              </div>
              <div style={shadow} className="flex items-center py-5 rounded-lg">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <GiWeightScale
                      style={{ height: "1.2rem", width: "1.2rem" }}
                    />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span>weight</span>
                  <h1 className="font-bold text-black  ">
                    {userProfile?.weight || "NA"} kg
                  </h1>
                </div>
              </div>
              <div style={shadow} className="flex items-center py-5 rounded-lg">
                <Avatar className="bg-red-200 flex justify-center items-center mx-4">
                  <AvatarImage />
                  <AvatarFallback>
                    <FaRulerVertical />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span>Height</span>
                  <h1 className="font-bold text-black  ">
                    {userProfile?.height || "NA"} cm
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[100%] py-4">
              {isLoggedInUser ? (
                <Button onClick={logoutHandler}>Logout</Button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
