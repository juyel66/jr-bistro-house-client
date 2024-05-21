// import FoodCard from "../FoodCard/FoodCard";
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';


// const OrderTab = ({item}) => {
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//           return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//       };
//     return (
//         <div className="mt-5 mb-5">
       

// <Swiper
//         pagination={pagination}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide> 
//         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
//       {
//           item.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
//         }
//         </div>
            
//         </SwiperSlide>
//       </Swiper>

      
            
//         </div>
//     );
// };

// export default OrderTab;








import FoodCard from "../FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Utility function to chunk array into subarrays of a specified size
const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const OrderTab = ({ item }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  // Chunk items into arrays of 6 items each
  const chunkedItems = chunkArray(item, 6);

  return (
    <div className="mt-5 mb-5">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {chunkedItems.map((chunk, chunkIndex) => (
          <SwiperSlide key={chunkIndex}>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
              {chunk.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
