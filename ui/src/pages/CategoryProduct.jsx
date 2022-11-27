import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import CategoryItems from "../components/productCard/CategoryItems";
import ProductCard from "../components/productCard/ProductCard";

const CategoryProduct = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="mb-6 flex justify-between">
        <h2 className="text-2x1 font-bold text-3xl">Shoes</h2>
        <Link
          to="/categories"
          className="bg-black text-white py-2 px-4 font-bold w-[%20]"
        >
          <i className="fa fa-arrow-left"></i>
          <span href="#"> Go Back</span>
        </Link>
      </div>
      <div className=" grid gap-3 mx-auto justify-items-center md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
        <ProductCard title="Nike Shoes" price="200.22" />
        <ProductCard title="Nike Shoes" price="200.22" />
        <ProductCard title="Nike Shoes" price="200.22" />
        <ProductCard title="Nike Shoes" price="200.22" />
      </div>
      <div className="mt-4 grid gap-3 mx-auto justify-items-center md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
        <ProductCard title="Nike Shoes" price="200.22" />
        <ProductCard title="Nike Shoes" price="200.22" />
        <ProductCard title="Nike Shoes" price="200.22" />
        <ProductCard title="Nike Shoes" price="200.22" />
      </div>
      <Pagination />
    </div>
  );
};

export default CategoryProduct;
