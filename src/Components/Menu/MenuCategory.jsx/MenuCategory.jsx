import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({item,title, img}) => {
    return (
        <div className='pt-8'>
            { title && <Cover img={img} title={title} description={'would you like  to try to dish?'}></Cover>} 
               <div className='grid lg:grid-cols-2 my-16 gap-4'>
                    {
                        item.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <div className="flex justify-center -mt-7 ">
          <Link to={`/order/${title}`} className=" text 3xl uppercase btn border-b-4  border-0 border-gray-800 mb-6  ">
            order Your favorite food
          </Link>
        </div>
            
        </div>
    );
};

export default MenuCategory;