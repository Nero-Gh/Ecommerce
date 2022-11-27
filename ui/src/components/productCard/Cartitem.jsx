import React from "react";

const Cartitem = ({ number, image, title, price }) => {
  return (
    <table className="table-auto w-8/12">
      <thead>
        <tr className="text-left">
          <th>No.</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100">
          <td className="pl-2">{number}</td>
          <td>
            <img src={image} alt="some image" className="w-16 h-16" />
            <p>{title}</p>
          </td>
          <td>Ghc {price}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cartitem;
