import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import SectionsTitle from "../../SectionsTitle/SectionsTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu,loading,refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    const handleDeleteItem = (item) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data)
                if(res.data.deletedCount > 0){
                    
                    refetch();
                 
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                      });

                }
           
            }
          });

    }

    // update item 
    const handleUpdateItem = () =>{

    }
    return (
        <div>
            <SectionsTitle heading='Hurry Up' subHading="Manage All items"></SectionsTitle>
            <div className="text-2xl font-semibold mb-3">Total Item: {menu.length}</div>

            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="lg:text-xl bg-green-400">
        <th>No</th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            menu.map((item,index) =><tr key={item._id}>
                <th>
               {index+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  
                  </div>
                </td>
                <td>
                    {item.name}
                </td>
                <td>${item.price}</td>
                 <td>
                  <Link to={`/dashboard/updateItem/${item._id}`} onClick={()=>handleUpdateItem(item._id)} className="btn btn-ghost btn-lg text-green-600"><FaEdit></FaEdit></Link>
                </td>
                <td>
                  <button onClick={()=>handleDeleteItem(item)} className="btn btn-ghost btn-lg text-green-600"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
        }

    </tbody>
    
  </table>
</div>
            </div>
            
        </div>
    );
};

export default ManageItems;