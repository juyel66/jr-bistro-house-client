import axios from "axios";



export const axiosPublic = axios.create({
    baseURL: 'https://jr-bistro-house-server.vercel.app/'
})
const userAxiosPublic = () => {
    return axiosPublic;
};

export default userAxiosPublic;