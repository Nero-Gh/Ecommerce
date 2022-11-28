import React from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";

const ChangePassword = () => {
  return (
    <div class="flex flex-col md:flex-row">
      <DashboardSidebar />
      <div
        id="main"
        class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
      >
        <div class="bg-gray-800 pt-3">
          <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
            <h1 class="font-bold pl-2">Change Password</h1>
          </div>
        </div>

        <div class="flex flex-wrap justify-center ml-10 mt-10">
          <div class="w-9/12 ml-3 mx-auto">
            <form>
              <div className="form-group mb-6">
                <label
                  for="password"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Password
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
                  id="firstname"
                  aria-describedby="firstnameHelp"
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-group mb-6">
                <label
                  for="conpassword"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Confirm Password
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
                  id="firstname"
                  aria-describedby="firstnameHelp"
                  placeholder="Confirm Password"
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
      </div>
    </div>
  );
};

export default ChangePassword;
