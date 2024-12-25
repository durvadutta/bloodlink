import { setReqNotification } from "@/redux/rtnSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const useGetRTN = () => {
  const dispatch = useDispatch();
  const reqNotification = useSelector((state) => state.rtn.reqNotification);
  const socket = useSelector((state) => state.socketio.socket);
  useEffect(() => {
    socket?.on("notification", (newNotification) => {
      dispatch(setReqNotification([...reqNotification, newNotification]));
    });

    return () => {
      socket?.off("notification");
    };
  }, [reqNotification, dispatch]);
};
export default useGetRTN;
