import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Pagination,  } from 'swiper/modules';
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionsTitle from '../SectionsTitle/SectionsTitle';

const SwiperSlider2 = () => {
    return (
       <section className=''>
        <SectionsTitle subHading={'From 11:00am to 10:00pm'}
        heading={'Order Online'}
        >
          
        </SectionsTitle>
         <div className='mb-10'>
             
             <Swiper
               slidesPerView={4}
               spaceBetween={30}
               freeMode={true}
               pagination={{
                 clickable: true,
               }}
               modules={[FreeMode, Pagination]}
               className="mySwiper"
             >
               <SwiperSlide><img src={slide1} alt="" />
               <h1 className='lg:text-3xl text-[10px] text-white text-center -mt-12 uppercase '>Salad</h1>
               </SwiperSlide>
               <SwiperSlide><img src={slide2} alt="" />
               <h1 className='lg:text-3xl text-[10px] text-white lg:black text-center -mt-12 uppercase '>Pizzas</h1>
               </SwiperSlide>
               <SwiperSlide><img src={slide3} alt="" />
               <h1 className='lg:text-3xl text-[10px] text-white lg:black text-center -mt-12 uppercase '>Soups</h1>
               </SwiperSlide>
               <SwiperSlide><img src={slide4} alt="" />
               <h1 className='lg:text-3xl text-[10px] text-white lg:black text-center -mt-12 uppercase '>Desserts</h1>
               </SwiperSlide>
               <SwiperSlide><img src={slide4} alt="" />
               <h1 className='lg:text-3xl text-[10px] text-white lg:black text-center -mt-12 uppercase '>Salad</h1>
               </SwiperSlide>
               <SwiperSlide><img src={slide5} alt="" />
               <h1 className='lg:text-3xl text-[10px] text-white lg:black text-center -mt-12 uppercase '>Salad</h1>
               </SwiperSlide>
       
             </Swiper>
           
                   
               </div>
       </section>
    );
};

export default SwiperSlider2;


