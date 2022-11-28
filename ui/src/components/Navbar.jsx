import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-700 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Vatican Mart
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-100 dark:focus:ring-gray-100"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          {!open ? (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
        </button>
        <div
          className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-white">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-100 md:p-0 dark:text-white "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="block py-2 pl-3 pr-4 text-blue-300 rounded hover:bg-blue-900 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/checkout"
                className="block py-2 pl-3 pr-4 text-blue-300 rounded hover:bg-blue-900 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0"
              >
                My Cart(5)
              </Link>
            </li>

            <li className="flex ">
              <Link
                to="/customer/register"
                className="block py-2 pl-3 mr-2 pr-4 text-blue-300 rounded hover:bg-blue-900 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0"
              >
                Register
              </Link>
              <Link
                to="/customer/login"
                className="block py-2 pl-3 pr-4 mr-2 text-blue-300 rounded hover:bg-blue-900 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0"
              >
                Login
              </Link>
              <Link
                to="/customer/dashboard"
                className="block py-2 pl-3 pr-4 mr-2 text-blue-300 rounded hover:bg-blue-900 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0"
              >
                Dashboard
              </Link>
              <Link
                to="/logout"
                className="block py-2 pl-3  pr-4 text-blue-300 rounded hover:bg-blue-900 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
