import {createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";
import Login from "../Pages/Login/Login";
import Pdf from "../../Pdf";
import SignUp from "../SignUp/SignUp";
import PrivetRout from "../PrivetRout/PrivetRout";
import DashBoard from "../DashBoard/DashBoard";
import Cart from "../DashBoard/Cart";
import AllUsers from "../DashBoard/Admin/AllUsers";
import AddItems from "../DashBoard/AddItems/AddItems";
import AdminRout from "../AdminRout/AdminRout";
import ManageItems from "../DashBoard/ManageItems/ManageItems";
import UpdateItem from "../DashBoard/UpdateItem/UpdateItem";
import Payment from "../DashBoard/Payment/Payment";
import PaymentHistory from "../DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../DashBoard/UserHome/UserHome";
import AdminHome from "../DashBoard/AdminHome/AdminHome";
import Booking from "../DashBoard/Booking";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path: '/pdf',
          element: <Pdf></Pdf>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
      ]

    }, 
    // normal user rout 
    {
      path: 'dashboard',
      element: <PrivetRout><DashBoard></DashBoard></PrivetRout>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path:'UserHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path:'payment',
          element: <Payment></Payment>
        },
        // admin  rout 
        {
          path:'adminHome',
          element: <AdminRout><AdminHome></AdminHome></AdminRout>
        },
        {
          path: 'users',
          element:<AdminRout><AllUsers></AllUsers></AdminRout>

        },
        {
          path: 'addItems',
          element:<AdminRout><AddItems></AddItems></AdminRout>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRout><UpdateItem></UpdateItem></AdminRout>,
          loader: ({params}) => fetch(`https://jr-bistro-house-server.vercel.app/menu/${params.id}`)
        },
        {
          path: 'manageItems',
          element: <AdminRout><ManageItems></ManageItems></AdminRout>
        },
        {
          path: 'bookings',
          element:<Booking></Booking>
        }
      ]
    }
  ]);

const Routes = () => {
    return (
        <div>

            
        </div>
    );
};

export default Routes;