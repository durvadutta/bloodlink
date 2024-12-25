import {  setUserRequests } from "@/redux/userSlice";
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
const useGetUserRequests =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSUserRequests = async ()=>{
            try {
                const res = await axios.get("http://localhost:8000/api/v1/user/incomingReq", {withCredentials:true})
                if (res.data.success) {
                    dispatch(setUserRequests(res.data.requests));
                }
            } catch (error) {
                
            }
        }
        fetchSUserRequests();
    },[]);
}
export default useGetUserRequests;
