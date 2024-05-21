import SectionsTitle from "../../SectionsTitle/SectionsTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './featured-item.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white mb-10">
            <div className="bg-slate-500 bg-opacity-20 -mb-5"><SectionsTitle  heading={'Featured Item'} subHading={'Check it out'}></SectionsTitle></div>
         <div className="lg:flex items-center gap-5 bg-slate-500 bg-opacity-20 lg:py-20 lg:px-36">
         <div>
                <img src={featuredImg} alt="" />
            </div>
            <div>
                <p className="text-2xl">August 12 2024</p>
                <p className="text-3xl">WHERE CAN I GET SOME?</p>
                <p className="text-xl mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-outline border-b-4 border-0 mt-5 bg-gray-100 bg-opacity-20  text-black font-bold rounded-xl text-xl">Order now</button>

            </div>
         </div>
        </div>
    );
};

export default Featured;