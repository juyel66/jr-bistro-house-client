import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar.jsx/Navbar";


const Main = () => {
    const location= useLocation();
    console.log(location);
    const noNavbarAndFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noNavbarAndFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavbarAndFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Main;