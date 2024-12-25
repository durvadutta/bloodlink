import { setMessages } from "@/redux/chatSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const useGetAllMessages = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.userAuth.selectedUser);
  useEffect(() => {
    const fetchAllMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/message/all/${selectedUser?._id}`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setMessages(res.data.messages));
        }
      } catch (error) {
        console.log("error is", error);
      }
    };
    fetchAllMessages();
  }, [selectedUser]);
};
export default useGetAllMessages;
