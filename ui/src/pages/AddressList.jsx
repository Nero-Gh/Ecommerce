import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";

const AddressList = () => {
  return (
    <div class="flex flex-col md:flex-row">
      <DashboardSidebar />
      <div
        id="main"
        class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div class="bg-gray-800 pt-3">
          <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 class="font-bold pl-2">Address</h1>
          </div>
        </div>

        <div class="flex flex-wrap justify-center ml-10 mt-10">
          <div class="w-9/12 ml-3 mx-auto">
            <Link to="/customer/add-address">
              <button className="block bg-green-700 text-white p-1 mb-10 float-right">
                Add Address
              </button>
            </Link>
            <div className="flex flex-wrap gap-2 justify-between justify-items-center align-middle">
              <div className=" border h-32 p-2 border-gray-400 rounded cursor-pointer">
                <button className="text-[10px] bg-green-700 text-white p-1 mb-4">
                  <i className="fa fa-check-circle"></i> Default
                </button>
                <div className="flex align-middle justify-items-center">
                  <h3>Ohene Djan Street, Nsawam Ghana</h3>
                </div>
              </div>
              <div className=" border h-32 p-2 border-gray-400 rounded">
                <button className="text-[10px] bg-gray-700 text-white p-1 mb-4">
                  Select as Default
                </button>
                <div className="flex align-middle justify-items-center">
                  <h3>Ohene Djan Street, Nsawam Ghana</h3>
                </div>
              </div>
              <div className=" border h-32 p-2 border-gray-400 rounded">
                <button className="text-[10px] bg-gray-700 text-white p-1 mb-4">
                  Select as Default
                </button>
                <div className="flex align-middle justify-items-center">
                  <h3>Ohene Djan Street, Nsawam Ghana</h3>
                </div>
              </div>
              <div className=" border h-32 p-2 border-gray-400 rounded">
                <button className="text-[10px] bg-gray-700 text-white p-1 mb-4">
                  Select as Default
                </button>
                <div className="flex align-middle justify-items-center">
                  <h3>Ohene Djan Street, Nsawam Ghana</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressList;
