import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="w-8/12 mx-auto border p-2 flex flex-col text-center">
        <p>
          <i className="fa fa-check-circle text-4xl text-green-700"></i>
        </p>
        <h2 className="text-3xl font-semibold">Thanks for your order</h2>

        <div className="my-3">
          <Link to="/">
            <button className="bg-blue-600 text-white py-1 px-3 rounded mr-2">
              Home
            </button>
          </Link>
          <Link to="/customer/dashboard">
            <button className="bg-gray-600 text-white py-1 px-3 rounded">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
