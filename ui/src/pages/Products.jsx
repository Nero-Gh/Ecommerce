import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import ProductCard from "../components/productCard/ProductCard";

const Products = () => {
  return (
    <div>
      <div className="container m-auto">
        <div className=" mt-10 flex align-middle justify-between ">
          <h2 className="text-xl font-bold ">All Products</h2>
          <Link
            to="/"
            className="bg-gray-800 py-1 px-4 rounded text-white hover:py-2 hover:px-5 transition-all"
          >
            <i class="fa-solid fa-arrow-left"></i> Go Back
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-4 justify-items-center">
          <ProductCard title="Nike Shoe" price="23.00" imageAlt="nike-shoe" />
          <ProductCard title="Nike Shoe" price="23.00" imageAlt="nike-shoe" />
          <ProductCard title="Nike Shoe" price="23.00" imageAlt="nike-shoe" />
          <ProductCard title="Nike Shoe" price="23.00" imageAlt="nike-shoe" />
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-4 justify-items-center">
          <ProductCard title="Nike Shoe" price="23.00" imageAlt="nike-shoe" />
          <ProductCard title="Nike Shoe" price="23.00" imageAlt="nike-shoe" />
          <ProductCard title="Nike Shoe" price="23.00" imageAlt="nike-shoe" />
          <ProductCard title="Nike Shoe" price="23.00" imageAlt="nike-shoe" />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
