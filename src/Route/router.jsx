import { createBrowserRouter } from "react-router";
import MainLayouts from "../Mainlayouts/MainLayouts";
import Home from "../Pages/Home";
import Loading from "../Components/Loading";
import Apartment from "../Pages/Apartment";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import DashBoards from "../dashboards/DashBoards";
import MyProfile from "../Mainlayouts/MyProfile";
import Announcements from "../Mainlayouts/Announcements";
import Welcome from "../dashboards/Welcome";
import MakePayment from "../dashboards/Member/MakePayment";
import PaymentHistory from "../dashboards/Member/PaymentHistory";
import ManageMembers from "../dashboards/Member/ManageMembers";
import MakeAnnouncement from "../dashboards/Member/MakeAnnouncement";
import AgreementRequests from "../dashboards/Member/AgreementRequests";
import ManageCoupons from "../dashboards/Member/ManageCoupons";
import MakeAdmin from "../dashboards/Admin/MakeAdmin";
import PrivateRoute from "../Components/PrivateRoute";
import AdminRoute from "./AdminRoute";
import Forbidden from "../Components/Forbidden";
import MemberRoute from "./MemberRoute";
import ErrorPage from "../Components/ErrorPage";


export const router = createBrowserRouter([
    {

        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                Component: Home,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: 'apartment',
                element: <Apartment></Apartment>,
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/forbidden',
                element: <Forbidden></Forbidden>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashBoards></DashBoards>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Welcome></Welcome>
            },
            {
                path: 'my_profile',
                element:
                    <MyProfile></MyProfile>

            },
            {
                path: 'announcements',
                element:
                    <Announcements></Announcements>

            },
            {
                path: 'make_payment',
                element:
                    <MemberRoute>
                        <MakePayment></MakePayment>
                    </MemberRoute>

            },
            {
                path: 'payment_history',
                element:
                    <MemberRoute>
                        <PaymentHistory></PaymentHistory>
                    </MemberRoute>
            },
            {
                path: 'manage_members',
                element:
                    <AdminRoute>
                        <ManageMembers />
                    </AdminRoute>

            },
            {
                path: 'make_announcement',
                element:
                    <AdminRoute>
                        <MakeAnnouncement />
                    </AdminRoute>

            },
            {
                path: 'agreement_requests',
                element:
                    <AdminRoute>
                        <AgreementRequests />
                    </AdminRoute>

            },
            {
                path: 'manage_coupons',
                element: <AdminRoute>
                    <ManageCoupons />
                </AdminRoute>
            },
            {
                path: 'make_admin',
                element:
                    <AdminRoute>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>

            }


        ]
    }

]);