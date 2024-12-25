import { setRequestsSent, setSuggestedUsers, setUserRequests } from "@/redux/userSlice";
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
const useGetSuggestedUsers =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSuggestedUsers = async ()=>{
            try {
                const res = await axios.get("http://localhost:8000/api/v1/user/suggested", {withCredentials:true})
                if (res.data.success) {
                    dispatch(setSuggestedUsers(res.data.users));
                    dispatch(setRequestsSent(res.data.requestsSent));
                }
            } catch (error) {
                
            }
        }
        fetchSuggestedUsers();
    },[]);
}
export default useGetSuggestedUsers;