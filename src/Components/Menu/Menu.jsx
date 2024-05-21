import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionsTitle from "../SectionsTitle/SectionsTitle";
import MenuCategory from "./MenuCategory.jsx/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>JR Bistro | Our Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"Our Menu"}
        description={"would you like  to try to dish?"}
      ></Cover>
      {/* main cover  */}
      <div className="mt-10">
        <SectionsTitle
          subHading={"Today best offer"}
          heading={"Do not miss"}
        ></SectionsTitle>
      </div>
      {/* offered menu  items  */}
      <MenuCategory item={offered}></MenuCategory>
      {/* dessert menu items  */}
     <div>
     <MenuCategory
        item={desserts}
        title={"desserts"}
        img={dessertImg}
      ></MenuCategory>
      

     </div>
     <div>
     <MenuCategory item={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>

     </div>
      <div>

      <MenuCategory item={salad} title={"salad"} img={saladImg}></MenuCategory>
      
      </div>
      <div>
        <MenuCategory item={soup} title={"soup"} img={soupImg}></MenuCategory>
     
      </div>
    </div>
  );
};

export default Menu;
