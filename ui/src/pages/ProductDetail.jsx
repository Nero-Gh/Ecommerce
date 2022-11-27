import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/asset/logo512.png";
import Pagination from "../components/pagination/Pagination";
import ProductCard from "../components/productCard/ProductCard";

function ProductDetail() {
  return (
    <div className="container mx-auto w-full">
      <div className="grid grid-rows-1 mt-10">
        <div className=" grid grid-cols-12">
          <div className=" w-6/12 h-6/12 mx-auto col-span-4">
            <div className="border-2 border-gray-100 rounded">
              <img src={logo} alt="Some Image" />
            </div>
          </div>
          <div className=" col-span-6">
            <h2 className="text-2xl font-bold">Product Title</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              repellendus, molestias, nam corporis quibusdam quis ducimus
              debitis a quasi accusantium quos labore perspiciatis sint
              perferendis similique, alias saepe minus ea harum molestiae
              maiores itaque officiis?
            </p>
            <h2 className="mt-4 text-xl font-semibold">Price: Ghc 202.00</h2>

            <div className="mt-5 flex gap-2">
              <button className="py-1 px-2 bg-blue-600 text-white">
                <i className="fa fa-cart"></i> Add to Cart
              </button>
              <button className="py-1 px-2 bg-green-600 text-white">
                <i className="fa fa-cart"></i> Buy Now
              </button>
              <button className="py-1 px-2 bg-red-600 text-white">
                <i className="fa fa-cart"></i> Wishlist
              </button>
            </div>

            <div className="mt-5 w-[80%]">
              <div className="flex align-middle flex-wrap gap-2">
                <span className="text-lg font-semibold">Tags:</span>{" "}
                <p className="flex gap-1">
                  <Link
                    to="/categories/shoes/1"
                    className="bg-gray-600 text-xs text-white px-4 py-1 rounded"
                  >
                    <button>Shoes</button>
                  </Link>
                  <Link
                    to="/categories/shoes/1"
                    className="bg-gray-600 text-xs text-white px-4 py-1 rounded"
                  >
                    <button>Phones</button>
                  </Link>
                  <Link
                    to="/categories/shoes/1"
                    className="bg-gray-600 text-xs text-white px-4 py-1 rounded"
                  >
                    <button>Television</button>
                  </Link>
                  <Link
                    to="/category/shoe/1"
                    className="bg-gray-600 text-xs text-white px-4 py-1 rounded"
                  >
                    <button>Bed</button>
                  </Link>
                  <Link
                    to="/categories/shoes/1"
                    className="bg-gray-600 text-xs text-white px-4 py-1 rounded"
                  >
                    <button>Fridge</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className=" mt-10 flex align-middle justify-between ">
          <h2 className="text-xl font-bold ">Related Products</h2>
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
}

export default ProductDetail;
