import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FaDollarSign, FaList, FaUsers } from "react-icons/fa";
import { FaJediOrder } from "react-icons/fa6";


const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: stats} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async() =>{
            const res = await axiosSecure.get('admin-stats');
            return res.data;
        }
    })
    return (
        <div>
            <h1 className="text-3xl font-semibold">
                <span>Hi, Welcome_</span> 
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>
            <div>
            <div className="stats shadow mt-5">
  
  <div className="stat bg-green-300 ">
    <div className="stat-figure text-secondary">
    <FaDollarSign className="text-3xl"></FaDollarSign>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">${stats.revenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat bg-green-300 ">
    <div className="stat-figure text-secondary">
   <FaUsers className="text-3xl"></FaUsers>
    </div>
    <div className="stat-title">Users</div>
    <div className="stat-value">{stats.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  <div className="stat bg-green-300">
    <div className="stat-figure text-secondary">
   {/* <FaUsers className="text-3xl"></FaUsers> */}
   <FaList className="text-3xl"></FaList>
    </div>
    <div className="stat-title">Menu</div>
    <div className="stat-value">{stats.menuItems}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat bg-green-300">
    <div className="stat-figure text-secondary">
    <FaJediOrder className="text-3xl"></FaJediOrder>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">{stats.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
            </div>
            
        </div>
    );
};

export default AdminHome;