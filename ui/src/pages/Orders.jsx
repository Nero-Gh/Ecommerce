import React from "react";
import { Link } from "react-router-dom";
import image from "../components/asset/logo512.png";

const Orders = () => {
  return (
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
              <img src={image} alt="some image" className="w-16 h-16" />
              <p>Sneakers</p>
            </td>
            <td>Ghc 102.00</td>
            <td>
              <p>
                <i className="fa fa-spin fa-spinner text-gray-600 mr-1"></i>
                Processing
              </p>
            </td>
            <td></td>
          </tr>
          <tr className="bg-gray-100 mb-10">
            <td className="pl-2">1</td>
            <td>
              <img src={image} alt="some image" className="w-16 h-16" />
              <p>Sneakers</p>
            </td>
            <td>Ghc 102.00</td>
            <td>
              <p>
                <i className="fa fa-check-circle text-green-600 mr-1"></i>
                Completed
              </p>
            </td>
            <td>
              <a href="#" download>
                <button className="px-2 py-1 rounded text-white bg-blue-600">
                  Download
                </button>
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="pl-2">1</td>
            <td>
              <img src={image} alt="some image" className="w-16 h-16" />
              <p>Sneakers</p>
            </td>
            <td>Ghc 102.00</td>
            <td>
              <p>
                <i className="fa fa-times-circle text-red-600 mr-1"></i>
                Canceled
              </p>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
