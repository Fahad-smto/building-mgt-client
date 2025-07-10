import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);

    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (name.length < 5) {
            setNameError('Name should be more than 5 characters');
            return;
        } else {
            setNameError('');
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
        if (!passwordPattern.test(password)) {
            setPasswordError('Password should have one uppercase, one lowercase, and be longer than 6 characters');
            return;
        } else {
            setPasswordError('');
        }

        createUser(email, password)
            .then((result) => {
                console.log(result);
                toast.success('Registration successful!');
                form.reset();
                navigate('/');
            })
            .catch((error) => {
                toast.error(String(error?.message || 'An error occurred'));
            });
    };

    return (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            {/* Left background image */}
            <div
                className="hidden bg-cover lg:block lg:w-1/2"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
                }}
            ></div>

            {/* Right form section */}
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="Logo" />
                </div>

                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                    Register your account
                </p>

                <form onSubmit={handleRegister} className="space-y-4 mt-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                            Full Name
                        </label>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Your full name"
                            required
                        />
                        {nameError && <p className="text-sm text-red-500">{nameError}</p>}
                    </div>

                    {/* Photo */}
                    <div>
                        <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                            Photo URL
                        </label>
                        <input
                            name="photo"
                            id="photo"
                            type="text"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Photo URL"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                            Email Address
                        </label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                            Password
                        </label>
                        <input
                            name="password"
                            id="password"
                            type="password"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter a secure password"
                            required
                        />
                        {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    <Link to="/login" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">
                        Already registered?
                    </Link>
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div>
    );
};

export default Register;
