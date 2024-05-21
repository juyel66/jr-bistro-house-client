import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: 'https://jr-bistro-house-server.vercel.app/'

})
const useAxiosSecure = () => {
    return axiosSecure;

}
export default useAxiosSecure;