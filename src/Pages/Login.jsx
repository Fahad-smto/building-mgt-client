import { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');

    const { signIn, signinWithGoogle, passwordResetEmail } = useContext(AuthContext);

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        passwordResetEmail(email)
            .then(() => {
                alert('Check your email to reset password');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const handleGooglePopUp = () => {
        signinWithGoogle()
            .then(() => {
                navigate(location.state ? location.state : '/');
                toast.success('Login successfully');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                toast.success('Login successfully');
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => {
                toast.error(error.message);
                setError(error.message);
            });
    };

    return (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white    shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            {/* Left Side Image */}
            <div
                className="hidden bg-cover lg:block lg:w-1/2"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
                }}
            ></div>

            {/* Right Form Section */}
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="Logo" />
                </div>

                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                    Welcome back!
                </p>

                {/* Google Button */}
                <button
                    onClick={handleGooglePopUp}
                    className="flex items-center justify-center w-full mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                    <div className="px-4 py-2">
                        <FcGoogle className="text-xl" />
                    </div>
                    <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                </button>

                {/* Divider */}
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                    <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with email</span>
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="mt-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                            Email Address
                        </label>
                        <input
                            ref={emailRef}
                            name="email"
                            id="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                Password
                            </label>
                            <button
                                type="button"
                                onClick={handleForgotPassword}
                                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                            >
                                Forgot Password?
                            </button>
                        </div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            placeholder="Enter your password"
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                {/* Error */}
                {error && <p className="text-center mt-4 text-sm text-red-500">{error}</p>}

                {/* Signup redirect */}
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    <Link to="/register" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">
                        Don’t have an account? Sign Up
                    </Link>
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div>
    );
};

export default Login;
