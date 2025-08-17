import { use, useContext, useState } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import toast from "react-hot-toast";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
  
    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully"))
            .catch(() => toast.error("Something went wrong"));
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    

    return (
        <nav className="sticky top-0 z-50 bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-3 mx-auto md:flex md:items-center md:justify-between">
                {/* Logo + Mobile toggle */}
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <img className="w-auto h-7 sm:h-9 rounded-full" src="/logo.png" alt="Logo" />
                        <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                            BuildBuddy
                        </span>
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden gap-4">
                        {/* <button
                            onClick={toggleDarkMode}
                            className="text-gray-500 dark:text-gray-200"
                        >
                            {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
                        </button> */}
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
                    className={`absolute md:relative inset-x-0 md:inset-auto z-20 md:z-auto md:w-auto bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out md:flex md:items-center md:opacity-100 md:translate-x-0 ${isOpen
                            ? "opacity-100 translate-x-0 shadow-lg md:shadow-none"
                            : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
                        }`}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:gap-6 px-4 py-4 md:py-0 md:px-0">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-lg text-gray-700 dark:text-gray-200 transition hover:bg-blue-100 dark:hover:bg-gray-700 ${isActive ? "font-semibold text-blue-600" : ""
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/apartment"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-lg text-gray-700 dark:text-gray-200 transition hover:bg-blue-100 dark:hover:bg-gray-700 ${isActive ? "font-semibold text-blue-600" : ""
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Apartment
                        </NavLink>

                         

                      
                      {user && (  <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-lg text-gray-700 dark:text-gray-200 transition hover:bg-blue-100 dark:hover:bg-gray-700 ${isActive ? "font-semibold text-blue-600" : ""
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </NavLink>
)}

                     {user && (   <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-lg text-gray-700 dark:text-gray-200 transition hover:bg-blue-100 dark:hover:bg-gray-700 ${isActive ? "font-semibold text-blue-600" : ""
                                }`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </NavLink>)}

                        {user && (
                            <NavLink
                                to="/terms"
                                className={({ isActive }) =>
                                    `px-2.5 py-2 rounded-lg text-gray-700 dark:text-gray-200 transition hover:bg-blue-100 dark:hover:bg-gray-700 ${isActive ? "font-semibold text-blue-600" : ""
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Terms
                            </NavLink>
                            
                        )}

                        {/* Dark Mode Toggle (Desktop) */}
                        {/* <button
                            onClick={toggleDarkMode}
                            className="hidden md:block p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
                        </button> */}

                        {/* Login/Profile Section */}
                        <div className="mt-3 md:mt-0">
                            {user ? (
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        className="bg-blue-200 rounded-full p-1 hover:bg-green-400 transition-colors duration-300 cursor-pointer"
                                    >
                                        <div className="w-9 rounded-full ring ring-blue-400">
                                            <img
                                                src={user?.photoURL || "/user.jpg"}
                                                alt="user"
                                                className="w-full h-full object-cover rounded-full"
                                            />
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
                                            <Link
                                                to="/dashboard"
                                                className="dark:text-white"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => {
                                                    handleLogout();
                                                    setIsOpen(false);
                                                }}
                                                className="flex items-center gap-2 text-red-500"
                                            >
                                                <IoMdLogOut /> Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    className="btn text-white btn-sm btn-success shadow-none hover:shadow-none"
                                    onClick={() => setIsOpen(false)}
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