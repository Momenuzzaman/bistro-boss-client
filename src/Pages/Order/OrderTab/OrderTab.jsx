import React from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="max-w-7xl mx-auto pb-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
