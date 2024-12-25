import React, { useEffect } from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Components/Profile";
import MainLayout from "./Components/MainLayout";
import Suggested from "./Components/Suggested";
import SignupW from "./Components/SignupW";
import EditProfile from "./Components/EditProfile";
import Contact from "./Components/Contact";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Requests from "./Components/Requests";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import ChatPage from "./Components/ChatPage";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setOnlineUsers } from "./redux/chatSlice";
import { setSocket } from "./redux/socketSlice";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { setReqNotification } from "./redux/rtnSlice";


const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/suggested",
        element: <Suggested />,
      },
      {
        path: "/account/edit",
        element: <EditProfile />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/user-requests",
        element: <Requests />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignupW />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
 
]);

export default function App() {
  const user = useSelector((state) => state.userAuth.user);
  const socket = useSelector((state) => state.socketio.socket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      const socketio = io("http://localhost:8000", {
        query: {
          userId: user?._id,
        },
        transports: ["websocket"],
      });
      dispatch(setSocket(socketio));
      

      //listen events
      socketio.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });
      return () => {
        socketio.close();
        dispatch(setSocket(null));
      };
    } else if (socket) {
      socket?.close();
      dispatch(setSocket(null));
    }
  }, [user, dispatch]);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <>
      <main data-scroll-container>
        <RouterProvider router={browserRouter} />
      </main>
    </>
  );
}
 