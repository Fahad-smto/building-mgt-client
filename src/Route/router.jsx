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


export const router = createBrowserRouter([
    {

        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                Component: Home,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: 'apartment',
                element:<Apartment></Apartment>,
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

        ]
    },
    {
        path: '/dashboard',
        element: <DashBoards></DashBoards>,
        children: [
            {
                path: '/dashboard',
                element: <Welcome></Welcome>
            },
            {
                path: 'my_profile',
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            },
            {
                path: 'announcements',
                element: <PrivateRoute>
                    <Announcements></Announcements>
                </PrivateRoute>
            },
            {
                path: 'make_payment',
                element: <PrivateRoute>
                    <MakePayment></MakePayment>
                </PrivateRoute>
            },
            {
                path: 'payment_history',
                element: <PrivateRoute>
                    <PaymentHistory></PaymentHistory>
                </PrivateRoute>
            },
            {
                path: 'manage_members',
                element: <PrivateRoute>
                    <ManageMembers />
                </PrivateRoute>
            },
            {
                path: 'make_announcement',
                element: <PrivateRoute>
                    <MakeAnnouncement />
                </PrivateRoute>
            },
            {
                path: 'agreement_requests',
                element: <PrivateRoute>
                    <AgreementRequests />
                </PrivateRoute>
            },
            {
                path: 'manage_coupons',
                element: <PrivateRoute>
                    <ManageCoupons />
                </PrivateRoute>
            },
            {
                path: 'make_admin',
                element: <PrivateRoute>
                    <MakeAdmin></MakeAdmin>
                </PrivateRoute>
            }


        ]
    }

]);