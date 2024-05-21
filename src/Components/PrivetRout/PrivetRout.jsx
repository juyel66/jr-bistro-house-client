import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <div className="flex mt-40 justify-center"><span className="loading  loading-spinner w-40 "></span> </div>
    }
    if(user){
        return children;
    }
    return <Navigate to ='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRout;