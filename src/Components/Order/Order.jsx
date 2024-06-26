import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../FoodCard/FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup','dessert', 'drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
   
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");

    return (
        <div>
          <Helmet><title>JR Bistro | Order Food</title></Helmet>
           <Cover img={orderCover} title={'Order Food'}></Cover>
         <div>
         <Tabs className={'text-center mt-10'} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab >Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
      </TabList>

      <TabPanel>
        <OrderTab item={salad}></OrderTab>
      </TabPanel>

      <TabPanel>
      <OrderTab item={pizza}></OrderTab>
      </TabPanel>

      <TabPanel>
      <OrderTab item={soup}></OrderTab>
      </TabPanel>

      <TabPanel>
      <OrderTab item={desserts}></OrderTab>
      </TabPanel>

      <TabPanel>
        <OrderTab item={drinks}></OrderTab>
      </TabPanel>
    </Tabs>
         </div>
            
        </div>
    );
};

export default Order;