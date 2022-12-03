import React from "react";
import { Link } from "react-router-dom";
import image from "../components/asset/logo512.png";
// import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import SellerSidebar from "../components/dashboard/SellerSidebar";

const SellerProducts = () => {
  return (
    <div>
      <div class="flex flex-col md:flex-row">
        <SellerSidebar />
        <div
          id="main"
          class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
        >
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
              <h1 class="font-bold pl-2">Products</h1>
            </div>
          </div>
          <div className="bg-green-700 w-[10%] text-center mt-3 ml-3 rounded text-white">
            <Link to="/seller/add-product">
              <button>Add Products</button>
            </Link>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full ml-3">
              {/* <!--Metric Card--> */}
              <div className="container mx-auto mt-10">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="text-left">
                      <th>No.</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100 mb-10">
                      <td className="pl-2">1</td>
                      <td>
                        <p>Sneakers</p>
                      </td>
                      <td>Ghc 102.00</td>
                      <td>
                        <p>Published</p>
                      </td>
                      <td className="flex justify-between  w-4/12">
                        <Link
                          to="/seller/view-product"
                          className="px-3 py-1 bg-blue-700 text-white"
                        >
                          <i className="fa-solid fa-eye"></i>
                        </Link>
                        <Link
                          to="/seller/edit-product"
                          className="px-3 py-1 bg-green-700 text-white"
                        >
                          <i className="fa-solid fa-pen-to-square"> </i>
                        </Link>
                        <Link
                          to="/seller/delete-product"
                          className="px-3 py-1 bg-red-700 text-white"
                        >
                          <i className="fa-solid fa-trash"> </i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProducts;
