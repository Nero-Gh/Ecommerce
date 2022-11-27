import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

const CategoryItems = ({ image, title, imageAlt, downloads, cats }) => {
  return (
    <Card>
      <Link to="/categories/shoes/1">
        <img
          className="p-8 rounded-t-lg w-52 h-52 m-auto"
          src={image}
          alt={imageAlt}
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to="/categories">
          <h5 className="text-3x1 font-semibold tracking-tight text-gray-900 dark:text-dark">
            {title}
          </h5>
        </Link>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            {downloads ? "Downloaded: " + downloads : " "}
          </p>
          <p className="text-left">
            <Link to="/categories" className="text-red-800 ">
              {cats ? "Categories: " + cats : " "}
            </Link>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CategoryItems;
