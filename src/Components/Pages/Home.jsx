import { Helmet } from "react-helmet-async";
import JrBistro from "../JrBistro/JrBistro";
import ChefRecommends from "../Shared/ChefRecommends/ChefRecommends";
import Testimonials from "../Shared/Testimonials/Testimonials";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import SwiperSlider2 from "../SwiperSlider/SwiperSlider2";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div className="">
            <Helmet><title>JR Bistro | Home</title></Helmet>
            <SwiperSlider></SwiperSlider>
            <div>
                <SwiperSlider2></SwiperSlider2>
            </div>
            <div>
                <JrBistro></JrBistro>
            </div>
            <div>
                <PopularMenu></PopularMenu>
            </div>
            <div className="mt-10 mb-5">
                <ChefRecommends></ChefRecommends>
            </div>
            <div>
                <Featured></Featured>
            </div>
            <div>

                <Testimonials></Testimonials>
            </div>
            
        </div>
    );
};

export default Home;