import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div className=" ">
      <Cover img={img} title={title} description={description} />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 pt-[100px]">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={`/order/${title}`}>
          <button className="text-xl btn btn-outline border-0 border-b-4 mt-6 w-[310px] text-black mb-10">
            order Your Favorite food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
