import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";


import "swiper/swiper-bundle.css";

const SwiperSlider = () => {
  return (
    <div className=" mb-10">
      <div>
        <Swiper
          modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="rounded-xl">
            <div
              className="hero  h-[60vh]"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/4Nt701S/04.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  

                  <h1 className="mb-5 lg:text-5xl text-2xl font-bold">
                  <Typewriter
                    words={["Land of Serenity and Splendor"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                  </h1>
                  {/* <h1>Bangladesh</h1> */}
                  <p className="mb-5 text-xl lg:w-[700px] mx-auto">
                    Nestled in the lush delta of the Ganges-Brahmaputra-Meghna
                    rivers, Bangladesh beckons with its serene landscapes and
                    rich cultural heritage. Explore the bustling streets of
                    Dhaka, where ancient monuments stand side by side with
                    modern skyscrapers, reflecting the country dynamic spirit.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div
              className="hero  h-[60vh]"
              style={{
                backgroundImage: "url(https://i.ibb.co/d2r83V2/01.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">

                <h1 className="mb-5 lg:text-5xl text-2xl font-bold">
                  <Typewriter
                    words={["Thailand: Kingdom of Tranquility and Temptation"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                  </h1>
                 

                  {/* <h1>Thailand</h1> */}
                  <p className="mb-5 text-xl lg:w-[700px] mx-auto">
                    {" "}
                    Experience the best of both worlds with our townhouses,
                    where contemporary design meets the charm of a historic
                    neighborhood. Enjoy the convenience of urban living combined
                    with the comfort and privacy of your own space.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div
              className="hero  h-[60vh]"
              style={{
                backgroundImage: "url(https://i.ibb.co/SQ3qq5c/slide2.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">

                <h1 className="mb-5 lg:text-5xl text-2xl font-bold">
                  <Typewriter
                    words={["A Tapestry of Cultural Diversity"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                  </h1>
                  
                  {/* <h1>Malosiya</h1> */}
                  <p className="mb-5 text-xl lg:w-[700px] mx-auto">
                    Nestled in Southeast Asia, Malaysia boasts a rich tapestry
                    of cultural diversity, captivating landscapes, and vibrant
                    traditions. From the bustling streets of Kuala Lumpur, where
                    modern skyscrapers stand tall against a backdrop of historic
                    mosques and temples
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

      
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlider;