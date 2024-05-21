import { useEffect, useState } from 'react';
import SectionsTitle from '../../SectionsTitle/SectionsTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular');
    return (
        <div>
            <section >
                <SectionsTitle className
                heading={'From out menu'}
                subHading={"Popular Item"}
                >
                </SectionsTitle>
                <div className='grid lg:grid-cols-2 gap-4'>
                    {
                        popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <div className='flex justify-center mt-5'><button className="btn text-[#BB8506] lg:w-[180px] btn-outline text-xl ">View full menu</button></div>
            </section>
            
        </div>
    );
};

export default PopularMenu;