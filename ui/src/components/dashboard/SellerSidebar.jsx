import React from "react";
import { Link } from "react-router-dom";

const SellerSidebar = () => {
  return (
    <div>
      <nav aria-label="alternative nav">
        <div class="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
          <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul class="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
              <li class="mr-3 flex-1">
                <Link
                  to="/seller/dashboard"
                  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                >
                  <i class="fas fa-tasks pr-0 md:pr-3"></i>
                  <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                    Dashboard
                  </span>
                </Link>
              </li>

              <li class="mr-3 flex-1">
                <Link
                  to="/seller/products"
                  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
                >
                  <i class="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i>
                  <span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                    Products
                  </span>
                </Link>
              </li>

              <li class="mr-3 flex-1">
                <Link
                  to="/seller/add-product"
                  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
                >
                  <i class="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i>
                  <span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                    Add Products
                  </span>
                </Link>
              </li>

              <li class="mr-3 flex-1">
                <Link
                  to="/seller/orders"
                  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
                >
                  <i class="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i>
                  <span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                    Orders
                  </span>
                </Link>
              </li>

              <li class="mr-3 flex-1">
                <Link
                  to="/seller/orders"
                  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
                >
                  <i class="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i>
                  <span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                    Customers
                  </span>
                </Link>
              </li>

              <li class="mr-3 flex-1">
                <Link
                  to="/seller/reports"
                  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
                >
                  <i class="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i>
                  <span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                    Reports
                  </span>
                </Link>
              </li>
              <li class="mr-3 flex-1">
                <Link
                  to="/seller/profile"
                  class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                >
                  <i class="fa fa-wallet pr-0 md:pr-3"></i>
                  <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                    Profile
                  </span>
                </Link>
              </li>
              <li class="mr-3 flex-1">
                <Link
                  to="/seller/change-password"
                  class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
                >
                  <i class="fa fa-wallet pr-0 md:pr-3"></i>
                  <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                    Change Password
                  </span>
                </Link>
              </li>

              <li class="mr-3 flex-1">
                <Link class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                  <i class="fa fa-sign pr-0 md:pr-3"></i>
                  <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                    Logout
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SellerSidebar;
