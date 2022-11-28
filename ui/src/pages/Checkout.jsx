import React from "react";
import { Link } from "react-router-dom";
import image from "../components/asset/logo512.png";
import Cartitem from "../components/productCard/Cartitem";

const Checkout = () => {
  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-semibold">All Items</h2>
      <div className="grid ">
        <table className="table-auto w-8/12">
          <thead>
            <tr className="text-left">
              <th>No.</th>
              <th>Product</th>
              <th>Price</th>
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
            </tr>
            <tr className="bg-gray-100">
              <td className="pl-2">1</td>
              <td>
                <Link to="/products">
                  <img src={image} alt="some image" className="w-16 h-16" />
                  <p>Sneakers</p>
                </Link>
              </td>
              <td>Ghc 102.00</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="pl-2">1</td>
              <td>
                <img src={image} alt="some image" className="w-16 h-16" />
                <p>Sneakers</p>
              </td>
              <td>Ghc 102.00</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2">
          <div className="flex ">
            <div className="mr-2">
              <Link to="/categories">
                <button className="px-2 py-2 bg-blue-800 text-white rounded">
                  Continue Shopping
                </button>
              </Link>
            </div>
            <div>
              <Link to="/">
                <button className="px-2 py-2 bg-green-800 text-white rounded">
                  Proceed with payment
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* <Cartitem title="Sneakers" price="20.00" image={image} number={1} /> */}
      </div>
    </div>
  );
};

export default Checkout;
