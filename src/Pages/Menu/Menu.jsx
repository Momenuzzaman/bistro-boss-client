import React from "react";
// dynamic title from react-helmet
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";

import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
// img
import menuImg from "../../../src/assets/menu/banner3.jpg";
import soupImg from "../../../src/assets/menu/soup-bg.jpg";
import saladImg from "../../../src/assets/menu/salad-bg.jpg";
import pizzaImg from "../../../src/assets/menu/pizza-bg.jpg";
import dessertImg from "../../../src/assets/menu/dessert-bg.jpeg";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="px-3 md:px-0">
      <Helmet>
        <title>Bistro boss | Menu</title>
      </Helmet>
      <div className="pb-[100px]">
        <Cover
          title={"our menu"}
          description={"would you like To try A dish?"}
          img={menuImg}
        />
      </div>
      <SectionTitle subtitle={"Don't miss"} title={"TODAY'S OFFER"} />
      <MenuCategory
        items={offered}
        title="offered"
        img={dessertImg}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* dessert menu items  */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"pizza"}
        img={pizzaImg}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"salad"}
        img={saladImg}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"soup"}
        img={soupImg}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
