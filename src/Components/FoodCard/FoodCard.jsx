import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useCarts from "../../Hooks/useCarts";


const FoodCard = ({item}) => {
    const { name, image, price, recipe, _id } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCarts();
    const handleAddToCart = () =>{
     if(user && user.email){
      // send cart item to the database 
      console.log(user.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      }                       
      console.log(cartItem);

      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} added to you card`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch cart to update the cart items count
          refetch()
          
        }
      })
     

     }
     
     else{
      Swal.fire({
        title: "Your are not logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
      //  send the user to the login page  
      navigate('/login', {state: {from: location}})
    

        }
      });
     }

    }
    
    return (
        <div >
               <div className="card border-2 border-gray-900 h-[500px] w-full card-compact bg-base-100 shadow-xl">
  <figure><img  className=" mt-5 w-full p-2 rounded-xl" src={image}alt="Shoes" /></figure>
  <p className="bg-slate-900 absolute right-0 text-white px-4 mt-4 mr-4">${price}</p>
  <div className="card-body">
    <p className="text-3xl text-center ">{name}</p>
    <h2 className="text-center">{recipe}</h2>

    <div className="card-actions justify-center">
      <button onClick={handleAddToCart} className="btn text-[#BB8506] lg:w-[180px] border-b-[7px] btn-outline text-xl">Add to cart</button>
    </div>
  </div>
   </div>
            
        </div>
    );
};

export default FoodCard;


