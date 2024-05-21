import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex">
            <div className="lg:w-64 min-h-screen bg-orange-400">
                {/* <ul>
                   
                    <li className="flex items-center lg:mt-4 text-white rounded-lg p-1 ">  <div className="lg:ml-2 mr-2"><FaHome></FaHome></div> <NavLink to='/dashboard/cart' >User Home</NavLink></li>

                    <li className="flex items-center lg:mt-4 text-white rounded-lg p-1 ">  <div className="lg:ml-2 mr-2"><  FaShoppingCart></FaShoppingCart></div> <NavLink to='/dashboard/cart' > My Cart</NavLink></li>   

                    <li className="flex items-center lg:mt-4 text-white rounded-lg p-1 bg-blue-600 ">  <div className="lg:ml-2 mr-2"><  FaShoppingCart></FaShoppingCart></div> <NavLink to='/dashboard/cart' > My Cart</NavLink></li>
                </ul> */}

                <ul className="menu p-4">
                    <li>
                        <NavLink to ='/dashboard/UserHome' >
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/reservation' >
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/UserHome' >
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/cart' >
                            <FaShoppingCart></FaShoppingCart>
                            User Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/review' >
                            <FaAd></FaAd>
                            Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/dashboard/bookings' >
                            <FaList></FaList>
                            My Bookings</NavLink>
                    </li>

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
               

                </ul>

            </div>
            <div className="flex-1 lg:p-8 p-2">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashBoard;