import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Components/Hook/useAxiosSecure";
import useAuth from "../Components/Hook/useAuth";



const useCarts = () => {
//   tan stack query 
const {user} = useAuth();
console.log(user?.email);
const axiosSecure = useAxiosSecure();
const {refetch, data: cart =[]} = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async ()=>{
        const res = await axiosSecure.get(`/carts?email=${user?.email}`)
        console.log(res.data);
        return res.data;
    }

})
return [cart,refetch]
};

export default useCarts;