import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="container  mt-6  mx-auto">
      <div className="flex align-middle justify-between ">
        <h2 className="text-xl font-bold ">Latest Product</h2>
        <a
          href="#"
          className="bg-gray-800 py-1 px-4 rounded text-white hover:py-2 hover:px-5 transition-all"
        >
          View All Products <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-4 justify-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* //Categories Section */}

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
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
