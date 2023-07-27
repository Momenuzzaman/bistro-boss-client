import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  console.log(menu);
  const popularMenu =
    menu && menu.filter((singleMenu) => singleMenu.category === "popular");
  return (
    <section className="max-w-7xl mx-auto px-3  mb-10">
      <SectionTitle subtitle="Check it out" title={"from our menu"} />
      <div className="grid md:grid-cols-2 gap-6">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="text-xl btn btn-outline border-0 border-b-4 mt-6 w-[200px] text-black ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
