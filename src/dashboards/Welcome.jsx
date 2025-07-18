import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Welcome = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
                Welcome{user?.displayName ? `, ${user.displayName}` : ""}!
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
                This is your dashboard. Here, you can manage your profile, check announcements, and track your apartment agreement status.
            </p>
            <img
                src="https://illustrations.popsy.co/gray/dashboard.svg"
                alt="Dashboard illustration"
                className="w-72 sm:w-96 mt-6"
            />
        </div>
    );
};

export default Welcome;
