import { useContext } from "react";
import { Link, NavLink } from "react-router";
// import { AuthContext } from "../provider/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import toast from "react-hot-toast";

const NavBar = () => {
    // const { user, logOut } = useContext( );

    // const handleLogout = () => {
    //     logOut()
    //         .then(() => toast.success("Logged out successfully"))
    //         .catch(() => toast.error("Something went wrong"));
    // };

    return (
        <nav className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo & Brand */}
                <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
                    <span className="tracking-wide italic">
                        My<span className="text-orange-500">Apartment</span>
                    </span>
                </Link>

                {/* Menu */}
                <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-600 border-b-2 border-orange-500 pb-1"
                                    : "hover:text-orange-500 transition"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/apartment"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-orange-600 border-b-2 border-orange-500 pb-1"
                                    : "hover:text-orange-500 transition"
                            }
                        >
                            Apartment
                        </NavLink>
                    </li>
                </ul>

                {/* Right Side: Login or Profile */}
                <div className="flex items-center gap-3">
                    {/* {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ring ring-orange-200 hover:ring-orange-400 transition">
                                    <img src={user.photoURL || "/user.jpg"} alt="User" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
                            >
                                <li className="text-center font-semibold border-b pb-2 cursor-default">
                                    {user.displayName || "User"}
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 text-red-500"
                                    >
                                        <IoMdLogOut size={18} /> Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="btn btn-sm bg-orange-500 text-white hover:bg-orange-400 transition"
                        >
                            Log in
                        </Link>
                    )} */}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
