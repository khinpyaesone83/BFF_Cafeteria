import React from "react";
import ImageOne from "../images/menu-1.jpg";
import ImageTwo from "../images/egg-1.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-10 shadow" />
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl mb-2">Vegetable and meat sandwiches</h2>
          <p className="mb-2">Delicious and nutritious</p>
          <span>Price-1500Ks</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-10 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Cripsy,delicious and nutritious</p>
          <span>Price-1000Ks</span>
        </div>
      </div>
    </>
  );
};

export default Content;
