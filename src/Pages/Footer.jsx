

const Footer = () => {
    return (
        <footer class="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
            <div class="container mx-auto px-6 py-10">
                <div class="lg:flex lg:items-start lg:justify-between">
                    {/* <!-- Brand Section --> */}
                    <div class="mb-10 lg:mb-0 lg:w-1/3">
                        <a href="/" class="flex items-center space-x-2">
                            <img src="/logo.png" class="h-8 w-8 rounded-full" alt="Logo" />
                            <span class="text-xl font-semibold tracking-wide text-blue-600">BMS</span>
                        </a>
                        <p class="mt-4 max-w-sm text-sm">
                            BMS is your all-in-one platform for managing residential buildings, tenants, maintenance, and communication with ease and security.
                        </p>
                        <div class="flex mt-6 space-x-4">
                            <a href="#" class="hover:text-blue-500 transition"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="hover:text-blue-500 transition"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="hover:text-blue-500 transition"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#" class="hover:text-blue-500 transition"><i class="fab fa-github"></i></a>
                        </div>
                    </div>

                    {/* <!-- Links Section --> */}
                    <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 lg:w-2/3">
                        <div>
                            <h3 class="text-md font-semibold uppercase mb-4 text-gray-800 dark:text-white">Company</h3>
                            <ul>
                                <li class="mb-2">
                                    <a href="#" class="text-sm hover:underline hover:text-blue-600">About Us</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="text-sm hover:underline hover:text-blue-600">Careers</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm hover:underline hover:text-blue-600">Partners</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-md font-semibold uppercase mb-4 text-gray-800 dark:text-white">Features</h3>
                            <ul>
                                <li class="mb-2">
                                    <a href="#" class="text-sm hover:underline hover:text-blue-600">Tenant Management</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="text-sm hover:underline hover:text-blue-600">Maintenance Requests</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm hover:underline hover:text-blue-600">Notice Board</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-md font-semibold uppercase mb-4 text-gray-800 dark:text-white">Resources</h3>
                            <ul>
                                <li class="mb-2">
                                    <a href="#" class="text-sm hover:underline hover:text-blue-600">Help Center</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="text-sm hover:underline hover:text-blue-600">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="text-sm hover:underline hover:text-blue-600">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-md font-semibold uppercase mb-4 text-gray-800 dark:text-white">Contact</h3>
                            <ul>
                                <li class="text-sm mb-2">📞 +880 123 456 789</li>
                                <li class="text-sm mb-2">📧 support@bms.com</li>
                                <li class="text-sm">📍 Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr class="my-8 border-gray-200 dark:border-gray-700" />

                <p class="text-center text-sm text-gray-500 dark:text-gray-400">
                    © 2025 BMS — All rights reserved.
                </p>
            </div>
        </footer>

    );
};

export default Footer;