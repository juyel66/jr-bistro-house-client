import useAuth from "../../Hook/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1 className="text-3xl font-semibold">
                <span >Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>
            <img className="w-28 mt-5 border-2 border-gray-900 h-28 rounded-full" src={user?.photoURL} alt="" />
            
        </div>
    );
};

export default UserHome;