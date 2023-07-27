import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useMenu from "../../Hooks/useMenu";
import orderImg from "../../../src/assets/shop/banner2.jpg";
// react-tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../Shared/Cover/Cover";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["offered", "salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  console.log(menu);
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drink = menu.filter((item) => item.category === "drinks");
  console.log(drink);
  return (
    <div>
      <Helmet>
        <title>Bistro boss | order</title>
      </Helmet>
      <Cover
        title={"our shop"}
        description={"Would you like to try a dish?"}
        img={orderImg}
      />
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="max-w-xl mx-auto py-6 mt-5 font-bold md:text-xl md:space-x-3">
            <Tab>Offered</Tab>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={offered} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drink} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
