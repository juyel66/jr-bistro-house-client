import SectionsTitle from "../../SectionsTitle/SectionsTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css"; // Add this import for Rating styles

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <div>
      {/* <section>
        <SectionsTitle
          subHeading={"Testimonials"}
          heading={"What our client say"}
        />
      </section> */}
      <div className="lg:w-[40%] text-center mx-auto mb-5">
            <p className="text-yellow-600">---What our client say---</p>
            <h1 className="lg:text-4xl uppercase border-y-4 py-4">Testimonials</h1>
            
        </div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-20">
                <div className="flex justify-center mb-4">
                  <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                </div>
                <p className="text-center">{review.details}</p>
                <p className="text-2xl text-orange-400 text-center">{review.name}</p>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p className="text-center">Loading...</p>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Testimonials;
