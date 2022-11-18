import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

const CategoryCard = ({ image, title, imageAlt, downloads, cats }) => {
  return (
    <Card>
      <a href="#">
        <img
          className="p-8 rounded-t-lg w-52 h-52 m-auto"
          src={image}
          alt={imageAlt}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-3x1 font-semibold tracking-tight text-gray-900 dark:text-dark">
            <Link to="/">{title}</Link>
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            {downloads ? "Downloaded: " + downloads : " "}
          </p>
          <p className="text-left">
            <a href="#" className="text-red-800 ">
              {cats ? "Categories: " + cats : " "}
            </a>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;
