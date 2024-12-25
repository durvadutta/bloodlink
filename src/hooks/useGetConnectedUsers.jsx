import { setConnectedUsers} from "@/redux/userSlice";
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
const useGetConnectedUsers =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchConnectedUsers = async ()=>{
            try {
                const res = await axios.get("http://localhost:8000/api/v1/user/connected", {withCredentials:true})
                if (res.data.success) {
                    dispatch(setConnectedUsers(res.data.users));
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchConnectedUsers();
    },[]);
}
export default useGetConnectedUsers;