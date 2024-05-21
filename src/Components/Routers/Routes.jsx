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
    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
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