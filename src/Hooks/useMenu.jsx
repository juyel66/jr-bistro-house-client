

// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import userAxiosPublic from "../Components/Hook/userAxiosPublic";


const useMenu = () => {
    const axiosPublic = userAxiosPublic();

    const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/menu');
            return res.data;

        }
    })
    return [menu,loading,refetch];

};

export default useMenu;