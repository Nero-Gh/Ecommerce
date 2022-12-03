import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import SellerSidebar from "../components/dashboard/SellerSidebar";

const AddProduct = () => {
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
              <h1 class="font-bold pl-2">Add Product</h1>
            </div>
          </div>

          <div class="flex flex-wrap mt-10">
            <div class="w-full">
              <div>
                <div className="container mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                  {/* Update form section */}
                  <form>
                    <div className="form-group mb-6">
                      <label
                        for="category"
                        className="form-label block mb-2 text-gray-700"
                      >
                        Category
                      </label>
                      <select
                        className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        s
                      >
                        <option value="category">Category</option>
                      </select>
                    </div>
                    <div className="form-group mb-6">
                      <label
                        for="title"
                        className="form-label inline-block mb-2 text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="title"
                        aria-describedby="titleHelp"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <label
                        for="price"
                        className="form-label inline-block mb-2 text-gray-700"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="price"
                      />
                    </div>

                    <div className="form-group mb-6">
                      <label
                        for="description"
                        className="form-label inline-block mb-2 text-gray-700"
                      >
                        Descripstion
                      </label>
                      <textarea
                        type="email"
                        className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="email"
                        placeholder="Type Description"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <label
                        for="image"
                        className="form-label inline-block mb-2 text-gray-700"
                      >
                        Product Image
                      </label>
                      <input
                        type="file"
                        className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="image"
                        // placeholder="Enter Email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
