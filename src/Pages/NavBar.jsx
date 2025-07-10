import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import toast from "react-hot-toast";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully"))
            .catch(() => toast.error("Something went wrong"));
    };

    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-3 mx-auto md:flex md:items-center md:justify-between">
                {/* Logo + Mobile toggle */}
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
                    </Link>
                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Menu items */}
                <div
                    className={`absolute md:relative z-20 w-full md:w-auto bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out md:flex md:items-center md:opacity-100 md:translate-x-0 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full md:opacity-100"
                        }`}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:gap-6 px-4 md:px-0">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-lg text-gray-700 dark:text-gray-200 transition hover:bg-blue-100 dark:hover:bg-gray-700 ${isActive ? "font-semibold text-blue-600" : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/apartment"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-lg text-gray-700 dark:text-gray-200 transition hover:bg-blue-100 dark:hover:bg-gray-700 ${isActive ? "font-semibold text-blue-600" : ""
                                }`
                            }
                        >
                            Apartment
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-lg text-gray-700 dark:text-gray-200 transition hover:bg-blue-100 dark:hover:bg-gray-700 ${isActive ? "font-semibold text-blue-600" : ""
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-lg text-gray-700 dark:text-gray-200 transition hover:bg-blue-100 dark:hover:bg-gray-700 ${isActive ? "font-semibold text-blue-600" : ""
                                }`
                            }
                        >
                            Contact
                        </NavLink>

                        {/* Search bar */}
                        <div className="relative mt-3 md:mt-0 md:ml-6 w-full md:w-[220px]">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                                placeholder="Search"
                            />
                        </div>

                        {/* Login/Profile Section */}
                        <div className="mt-3 md:mt-0 md:ml-6">
                            {user ? (
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        className="bg-blue-200 rounded-b-full p-1 hover:bg-green-400 rounded-full p-[3px] avatar transition-colors duration-300 cursor-pointer"
                                    >
                                        <div className="w-9 rounded-full ring ring-blue-400">
                                            <img src={user?.photoURL || "/user.jpg"} alt="user" />
                                        </div>
                                    </div>

                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-white dark:bg-gray-800 rounded-box w-48"
                                    >
                                        <li className="text-center font-semibold border-b pb-2 text-gray-700 dark:text-gray-200">
                                            {user.displayName || "User"}
                                        </li>
                                        <li>
                                            <Link to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li>
                                            <button onClick={handleLogout} className="flex items-center gap-2 text-red-500">
                                                <IoMdLogOut /> Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    className="btn text-white btn-sm btn-success avatar shadow-none hover:shadow-none focus:shadow-none active:shadow-none"
                                >
                                    Log in
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
