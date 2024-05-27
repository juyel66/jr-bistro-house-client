import { FaAd, FaBookmark, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../../Hooks/useCarts";

import useAdmin from "../Hook/useAdmin";


const DashBoard = () => {
    const [cart]=useCarts();
    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex lg:bg-green-100">
            <div className="lg:w-52  min-h-screen bg-green-500">
                {/* <ul>
                   
                    <li className="flex items-center lg:mt-4 text-white rounded-lg p-1 ">  <div className="lg:ml-2 mr-2"><FaHome></FaHome></div> <NavLink to='/dashboard/cart' >User Home</NavLink></li>

                    <li className="flex items-center lg:mt-4 text-white rounded-lg p-1 ">  <div className="lg:ml-2 mr-2"><  FaShoppingCart></FaShoppingCart></div> <NavLink to='/dashboard/cart' > My Cart</NavLink></li>   

                    <li className="flex items-center lg:mt-4 text-white rounded-lg p-1 bg-blue-600 ">  <div className="lg:ml-2 mr-2"><  FaShoppingCart></FaShoppingCart></div> <NavLink to='/dashboard/cart' > My Cart</NavLink></li>
                </ul> */}

               

                <ul className="menu p-4 lg:fixed  ">
                <div className="flex justify-center">
                    <img className="lg:w-16 mb-2 w-10 rounded-full" src="https://i.ibb.co/1MNP4gP/imresizer-1715263855167.jpg" alt="" />
                </div>
                {
                    isAdmin ? <>
                          <li>
                        <NavLink to ='/dashboard/adminHome' >
                            <FaHome></FaHome>
                            Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/addItems' >
                            <FaUtensils></FaUtensils>
                            Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/manageItems' >
                           <FaList></FaList>
                            Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/bookings' >
                            <FaBookmark></FaBookmark>
                            Manage Bookings</NavLink>
                    </li>
                  
                    <li>
                        <NavLink to ='/dashboard/users' >
                            <FaUser></FaUser>
                            All Users</NavLink>
                    </li>
                    
                    </>

                    :
                    
                    <>
                          <li>
                        <NavLink to ='/dashboard/cart' >
                            <FaShoppingCart></FaShoppingCart>
                            User Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/UserHome' >
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/History' >
                            <FaCalendar></FaCalendar>
                            Not History</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/UserHome' >
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                  
                    <li>
                        <NavLink to ='/dashboard/review' >
                            <FaAd></FaAd>
                            Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/paymentHistory' >
                            <FaList></FaList>
                            Real Payment History</NavLink>
                    </li>
                    
                    </>
                }
          

                    {/* shared NavLink  */}

                    <div className="divider"></div>
                    <li>
                        <NavLink to ='/' >
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/menu' >
                            <FaShoppingCart></FaShoppingCart>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/order/salad' >
                            <FaAd></FaAd>
                            Order</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/order/contact' >
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
               

                </ul>

            </div>
            <div className="flex-1  lg:p-8 p-2">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashBoard;