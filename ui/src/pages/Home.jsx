import React from "react";
import CategoryCard from "../components/productCard/CategoryCard";
import ProductCard from "../components/productCard/ProductCard";
import Reviews from "../components/Reviews/Reviews";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container  mt-6  mx-auto">
      <div className="flex align-middle justify-between ">
        {/* Latest Product Section  */}
        <h2 className="text-xl font-bold ">Latest Product</h2>
        <Link
          to="#"
          className="bg-gray-800 py-1 px-4 rounded text-white hover:py-2 hover:px-5 transition-all"
        >
          View All Products <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-4 justify-items-center">
        <ProductCard
          title="Nike Shoe"
          price="25.00"
          image="https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?b=1&s=170667a&w=0&k=20&c=MPOqUwkp7g0MawLUQsECgl1ME12YWNnqsFwracR9HQw="
          imageAlt="Nike Shoe"
        />
        <ProductCard
          title="Nike Shoe"
          price="25.00"
          image="https://images.pexels.com/photos/6540980/pexels-photo-6540980.jpeg?auto=compress&cs=tinysrgb&w=600"
          imageAlt="Nike Shoe"
        />
        <ProductCard
          title="Nike Shoe"
          price="25.00"
          image="https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?b=1&s=170667a&w=0&k=20&c=MPOqUwkp7g0MawLUQsECgl1ME12YWNnqsFwracR9HQw="
          imageAlt="Nike Shoe"
        />
        <ProductCard
          title="Nike Shoe"
          price="25.00"
          image="https://images.pexels.com/photos/6540980/pexels-photo-6540980.jpeg?auto=compress&cs=tinysrgb&w=600"
          imageAlt="Nike Shoe"
        />
      </div>
      {/* Latest Category Section Ends */}

      {/* //Categories Section */}

      <div className=" mt-10 flex align-middle justify-between ">
        <h2 className="text-xl font-bold ">Categories</h2>
        <Link
          to="/categories"
          className="bg-gray-800 py-1 px-4 rounded text-white hover:py-2 hover:px-5 transition-all"
        >
          View All Categories <i class="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-4 justify-items-center">
        <CategoryCard title="Shoes" downloads="20,230" />
        <CategoryCard title="Shoes" downloads="20,230" />
        <CategoryCard title="Shoes" downloads="20,230" />
        <CategoryCard title="Shoes" downloads="20,230" />
      </div>
      {/* Categories section ends */}

      {/* Popular product starts */}

      <div className="flex align-middle justify-between mt-10 ">
        <h2 className="text-xl font-bold ">Popular Products</h2>
        <a
          href="#"
          className="bg-gray-800 py-1 px-4 rounded text-white hover:py-2 hover:px-5 transition-all"
        >
          View All Products <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-4 justify-items-center">
        <ProductCard title="Nike Shoe" price="25.00" imageAlt="Nike Shoe" />
        <ProductCard title="Nike Shoe" price="25.00" imageAlt="Nike Shoe" />
        <ProductCard title="Nike Shoe" price="25.00" imageAlt="Nike Shoe" />
        <ProductCard title="Nike Shoe" price="25.00" imageAlt="Nike Shoe" />
      </div>
      {/* Popular product starts end */}

      {/* Popular Sellers starts*/}

      <div className="flex align-middle justify-between mt-10 ">
        <h2 className="text-xl font-bold ">Popular Sellers</h2>
        <a
          href="#"
          className="bg-gray-800 py-1 px-4 rounded text-white hover:py-2 hover:px-5 transition-all"
        >
          View All Products <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-4 justify-items-center">
        <CategoryCard title="Shoes" cats="Nike" />
        <CategoryCard title="Shoes" cats="Nike" />
        <CategoryCard title="Shoes" cats="Nike" />
        <CategoryCard title="Shoes" cats="Nike" />
      </div>

      <Reviews />
      {/* Popular product starts end */}
    </div>
  );
};

export default Home;
