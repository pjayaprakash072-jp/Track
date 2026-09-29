
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [dark, setDark] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <nav className="fixed w-full z-20 top-0  bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-7"
                        alt="Logo"
                    />

                    <span className="self-center text-xl text-gray-900 dark:text-white font-semibold whitespace-nowrap">
                        Flowbite
                    </span>
                </NavLink>


                {/* Right Side */}
                <div className="flex items-center gap-3">

                    {/* Dark Mode Button */}
                    <button
                        type="button"
                        onClick={() => setDark(!dark)}
                        className="md:hidden p-2.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                        {dark ? "☀️" : "🌙"}
                    </button>


                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                        <span className="sr-only">
                            Open main menu
                        </span>

                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                </div>


                {/* Navigation Links */}
                <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        <li>
                            <NavLink
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-600 md:p-0 dark:text-white"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/calculate"
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-600 md:p-0 dark:text-white"
                            >
                                Calculate
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-600 md:p-0 dark:text-white"
                                >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/history"
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-600 md:p-0 dark:text-white"
                                >
                                History
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/login"
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-600 md:p-0 dark:text-white"
                            >
                                Login
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/signup"
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-600 md:p-0 dark:text-white"
                                >
                                Signup
                            </NavLink>
                        </li>

                                {/* Dark Mode Button */}
                                <button
                                    type="button"
                                    onClick={() => setDark(!dark)}
                                    className="hidden md:block py-2 px-3 rounded text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                                >
                                    {dark ? "☀️" : "🌙"}
                                </button>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;

