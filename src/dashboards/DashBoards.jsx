import { FaUserCircle, FaBullhorn, FaHome, FaCreditCard, FaReceipt, FaUsers, FaFileSignature, FaTags } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router';

const DashBoards = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    {/* Navbar */}
                    <div className="navbar bg-base-300 w-full lg:hidden">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>

                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                    {/* Page content here */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600 font-semibold flex items-center" : "flex items-center"
                                }
                            >
                                <FaHome className="mr-2" /> Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="my_profile"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600 font-semibold flex items-center" : "flex items-center"
                                }
                            >
                                <FaUserCircle className="mr-2" /> My Profile
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="announcements"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold flex items-center"
                                        : "flex items-center"
                                }
                            >
                                <FaBullhorn className="mr-2" /> Announcements
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="make_payment"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold flex items-center"
                                        : "flex items-center"
                                }
                            >
                                <FaCreditCard className="mr-2" /> Make Payment
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="payment_history"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold flex items-center"
                                        : "flex items-center"
                                }
                            >
                                <FaReceipt className="mr-2" /> Payment History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="manage_members"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold flex items-center"
                                        : "flex items-center"
                                }
                            >
                                <FaUsers className="mr-2" /> Manage Members
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="make_announcement"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold flex items-center"
                                        : "flex items-center"
                                }
                            >
                                <FaBullhorn className="mr-2" /> Make Announcement
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="agreement_requests"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600 font-semibold flex items-center" : "flex items-center"
                                }
                            >
                                <FaFileSignature className="mr-2" /> Agreement Requests
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="manage_coupons"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600 font-semibold flex items-center" : "flex items-center"
                                }
                            >
                                <FaTags className="mr-2" /> Manage Coupons
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoards;