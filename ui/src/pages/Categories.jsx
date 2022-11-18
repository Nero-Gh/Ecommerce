import React from "react";
import CategoryCard from "../components/productCard/CategoryCard";

const Categories = () => {
  return (
    <div className="container m-auto">
      <div className=" mt-10 flex align-middle justify-between ">
        <h2 className="text-xl font-bold ">Categories</h2>
        <a
          href="#"
          className="bg-gray-800 py-1 px-4 rounded text-white hover:py-2 hover:px-5 transition-all"
        >
          View All Categories <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-4 justify-items-center">
        <CategoryCard title="Shoes" downloads="20,230" />
        <CategoryCard title="Shoes" downloads="20,230" />
        <CategoryCard title="Shoes" downloads="20,230" />
        <CategoryCard title="Shoes" downloads="20,230" />
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-4 justify-items-center">
        <CategoryCard title="Shoes" downloads="20,230" />
        <CategoryCard title="Shoes" downloads="20,230" />
        <CategoryCard title="Shoes" downloads="20,230" />
        <CategoryCard title="Shoes" downloads="20,230" />
      </div>
    </div>
  );
};

export default Categories;
