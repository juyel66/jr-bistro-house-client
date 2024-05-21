import SectionsTitle from "../../SectionsTitle/SectionsTitle";


const ChefRecommends = () => {
    return (
        <div>
            <SectionsTitle 
            heading={'Should Try'}
            subHading={'Chef recommends'}
            >
            </SectionsTitle>
            <div className="lg:flex lg:space-y-0 space-y-4 mt-10 gap-10">
                         {/* card-1 */}
                         <div className="card border-2 border-gray-900 w-full card-compact bg-base-100 shadow-xl">
  <figure><img  className=" mt-5 w-full p-2 rounded-xl" src="https://i.ibb.co/NF1rJdh/download-61.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-3xl text-center ">Caeser Salad</p>
    <h2 className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</h2>

    <div className="card-actions justify-center">
      <button className="btn text-[#BB8506] lg:w-[180px] border-t-[7px] btn-outline text-xl">Add to card</button>
    </div>
  </div>
   </div>
                         {/* card-1 */}
                         <div className="card card-compact border-2 border-gray-900 w-full bg-base-100 shadow-xl">
  <figure><img  className=" mt-5 w-full p-2 rounded-xl" src="https://i.ibb.co/sjCbqC2/download-62.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-3xl text-center ">Caeser Salad</p>
    <h2 className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</h2>

    <div className="card-actions justify-center">
      <button className="btn text-[#BB8506] lg:w-[180px] text-xl border-t-[7px] btn-outline">Add to card</button>
    </div>
  </div>
   </div>
                         {/* card-1 */}
                         <div className="card border-2 border-gray-900  card-compact bg-base-100 w-full shadow-xl">
  <figure><img className=" mt-5 w-full p-2 rounded-xl" src="https://i.ibb.co/K2dQV36/images-39.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-3xl text-center ">Caeser Salad</p>
    <h2 className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken <br /> Breast Fillets.</h2>

    <div className="card-actions justify-center">
      <button className="btn text-[#BB8506] lg:w-[180px] btn-outline text-xl border-t-[7px]">Add to card</button>
    </div>
  </div>
   </div>
            </div>
            
        </div>
    );
};

export default ChefRecommends;