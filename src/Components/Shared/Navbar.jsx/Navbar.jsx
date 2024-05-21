// import { useContext, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { toast } from "react-toastify";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import "react-tooltip/dist/react-tooltip.css";
// import { Tooltip } from 'react-tooltip'

import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoCartSharp } from "react-icons/io5";
import useCarts from "../../../Hooks/useCarts";

const Navbar = () => {
  //   const { logOut, user } = useContext(AuthContext);
    const [theme, setTheme] = useState(() => {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme || "light";
    });
    const {user,logOut} = useContext(AuthContext);
    const [cart] = useCarts();
    const handleLogout = () =>{
      logOut()
      .then(result =>{
        console.log(result?.user);
      })
      .catch(error=>{
        console.error(error);
      })
    }

  //   // dark and light mode

    useEffect(() => {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);


    const handleToggle = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
    };

  //   // dark and light mode end function

  //   const handleLogout = () => {
  //     logOut()
  //       .then(() => {
  //         toast.error("User logged out successfully");
  //       })
  //       .catch((error) => {
  //         console.error(error.message);
  //       });
  //   };

  const links = (
    <>
      <li><NavLink className={({ isActive }) => isActive? "btn btn-outline btn-success text-bold text-xl": "text-xl font-bold lg:text-white text-black " } to="/" > Home</NavLink>
      </li>
      <li><NavLink className={({ isActive }) => isActive? "btn btn-outline btn-success text-bold text-xl": "text-xl font-bold lg:text-white  text-black " } to="/menu" >Our Menu</NavLink>
      </li>
      <li className="mr-2"><NavLink className={({ isActive }) => isActive? "btn btn-outline btn-success text-bold text-xl": "text-xl font-bold lg:text-white text-black " } to="/order/salad" >Order</NavLink>
      </li>
      <li>
      <Link to='/dashboard/cart' className="btn bg-gray-500">
      <p className="text-2xl">< IoCartSharp /></p>
      <div className="badge badge-secondary">+{cart.length}</div>
      </Link>
      </li>

      {/* <span>{user?.displayName}</span> */}
     
   
    </>
  );

  return (
    <div>
      <div className="navbar  rounded-xl fixed z-10 bg-opacity-55 h-10 bg-black text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="lg:flex hidden items-center gap-1">
          <img className="lg:w-10  w-5 rounded-full"  src="https://i.ibb.co/1MNP4gP/imresizer-1715263855167.jpg" alt="" />
          <a className="lg:text-xl  text-[9px] lg:font-extrabold font-bold rounded-xl     lg:w-[180px] w-[100px] ">
            JR Bistro House
          </a>
          </div>
          <img className="lg:w-10 w-5 lg:hidden mr-1 rounded-full"  src="https://i.ibb.co/1MNP4gP/imresizer-1715263855167.jpg" alt="" />
          <a className="lg:text-xl lg:hidden  text-[9px] lg:font-extrabold font-bold rounded-xl     lg:w-[180px] w-[100px] ">
            Bistro_House
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <label className="cursor-pointer  grid place-items-center">
            <input
              onChange={handleToggle}
              type="checkbox"
              checked={theme === "dark"}
              className="toggle lg:w-[70px] h-8 theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {/* {
        user ? <> <li><button onClick={handleLogout} className= "btn btn-outline text-white " >Logout</button>
        </li></>:
        <> <li><NavLink className={({ isActive }) => isActive? "btn btn-outline btn-success text-bold text-xl": "text-xl font-bold" } to="/login" >Login</NavLink>
        </li></>
      } */}

      {
        user ? <div onClick={handleLogout} className="btn btn-outline text-white">Logout</div> :
        <NavLink className={({ isActive }) => isActive? "btn btn-outline btn-success text-bold text-xl": "text-xl font-bold " }  to='/login' >Login</NavLink>
      }

          {/* {user ? (
            <div className="">
              <div className="dropdown dropdown-hover">
                <Link>
                  <div tabIndex={0} role="" className=" m-1">
                    <img
                      className="  rounded-full w-10 h-10  lg:flex hidden border-2 border-green-500"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1]  text-left menu p-2 shadow  rounded-box lg:w-40   "
                >
                  <div className="border-2 rounded-xl bg-gray-300 ">
                    <li className=" text-black text-center  lg:text-xl ">
                      {user.displayName}
                    </li>
                    <button
                      onClick={handleLogout}
                      className=" ml-5 lg:w-24 text-center font-bold bg-gray-100 h-8 rounded-xl border-gray-800   text-black lg:text-xl"
                    >
                      Log Out
                    </button>
                  </div>
                </ul>
              </div>
            </div> */}
          {/* ) : (
            <FaUserCircle className="w-11 h-16"></FaUserCircle>
          )}

          {user ? (
            <div className="">
              <button
                onClick={handleLogout}
                className="border-2   lg:w-20 text-center font-bold bg-gray-100 h-10 rounded-xl border-gray-800   text-black lg:text-xl"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="space-x-2 flex">
              <div className="flex item-center">
                <Link
                  to="/login"
                  className="border-2 btn  p-1 lg:w-20 text-center bg-gray-100 font-bold h-8 rounded-xl border-gray-800   text-black text-xl "
                >
                  Login
                </Link>
              </div>
              <div className="lg:flex hidden">
                <Link
                  to="/Register"
                  className="border-2 btn   p-1 lg:w-20 text-center bg-gray-100 font-bold h-8 rounded-xl border-gray-800   text-black text-xl "
                >
                  Register
                </Link>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
