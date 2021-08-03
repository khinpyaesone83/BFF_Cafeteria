import React from "react";
import Menu1 from "../images/menu-1.jpg";
import Menu2 from "../images/menu-2.jpg";
import Menu3 from "../images/egg-1.jpg";
import Coffee1 from "../images/coffee-1.jpg";
import Coffee2 from "../images/coffee-2.jpg";
import Coffee3 from "../images/coffee-3.jpg";

const Menu = ({ handleCart }) => {
  // const handleCart = () => {
  //   alert("click");
  // };
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        <div className="menu-card">
          <img
            src={Menu1}
            alt="egg"
            className="h-80 w-80 rounded mb-10 shadow"
          />
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl mb-2">Vegetable and meat sandwiches</h2>
            <p className="mb-2">Delicious and nutritious</p>
            <span>Price-1500Ks</span>
            <div
              onClick={handleCart}
              className="bg-yellow-500 cursor-pointer py-3 px-7 mt-2 hover:bg-yellow-400"
            >
              Add to cart
            </div>
          </div>
        </div>
        <div className="menu-card">
          <img
            src={Menu2}
            alt="egg"
            className="h-80 w-80 rounded mb-10 shadow"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2">Egg with bread</h2>
            <p className="mb-2">Delicious and nutritious</p>
            <span>Price-1500Ks</span>
            <div
              onClick={handleCart}
              className="bg-yellow-500 cursor-pointer py-3 px-7 mt-2 hover:bg-yellow-400"
            >
              Add to cart
            </div>
          </div>
        </div>
        <div className="menu-card">
          <img
            src={Menu3}
            alt="egg"
            className="h-80 w-80 rounded mb-10 shadow"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2">Egg Muffins</h2>
            <p className="mb-2">Delicious and nutritious</p>
            <span>Price-1000Ks</span>
            <div
              onClick={handleCart}
              className="bg-yellow-500 cursor-pointer py-3 px-7 mt-2 hover:bg-yellow-400"
            >
              Add to cart
            </div>
          </div>
        </div>

        <div className="menu-card">
          <img
            src={Coffee1}
            alt="egg"
            className="h-full rounded mb-10 shadow"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2">Coffee</h2>
            <p className="mb-2">Delicious and nutritious</p>
            <span>Price-2500Ks</span>
            <div
              onClick={handleCart}
              className="bg-yellow-500 cursor-pointer py-3 px-7 mt-2 hover:bg-yellow-400"
            >
              Add to cart
            </div>
          </div>
        </div>
        <div className="menu-card">
          <img
            src={Coffee2}
            alt="egg"
            className="h-full rounded mb-10 shadow"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2">Latte</h2>
            <p className="mb-2">Delicious and nutritious</p>
            <span>Price-2500Ks</span>
            <div
              onClick={handleCart}
              className="bg-yellow-500 cursor-pointer py-3 px-7 mt-2 hover:bg-yellow-400"
            >
              Add to cart
            </div>
          </div>
        </div>
        <div className="menu-card">
          <img
            src={Coffee3}
            alt="egg"
            className="h-full rounded mb-10 shadow"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2">Expresso</h2>
            <p className="mb-2">Delicious and nutritious</p>
            <span>Price-2500Ks</span>
            <div
              onClick={handleCart}
              className="bg-yellow-500 cursor-pointer py-3 px-7 mt-2 hover:bg-yellow-400"
            >
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
