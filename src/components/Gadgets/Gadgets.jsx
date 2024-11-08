import { NavLink, Outlet } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "../Category/Category";
import { useEffect, useState } from "react";
import ShowGadgets from "../ShowGadgets/ShowGadgets";
import { createContext } from "react";
export const GadgetsContext = createContext({});
import "./Gadegts.css";

const Gadgets = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("gadgets.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data.gadgets));
  }, []);

  const smartPhones = allProducts.filter(
    (gadget) => gadget.category === "smartphones"
  );

  const tablets = allProducts.filter((gadget) => gadget.category === "tablets");
  const accessories = allProducts.filter(
    (gadget) => gadget.category === "accessories"
  );
  const laptops = allProducts.filter((gadget) => gadget.category === "laptops");

  return (
    <div className="mt-80 w-11/12 mx-auto">
      <h1 className="text-4xl font-extrabold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      {/* Sidebar */}

      <div className="flex gap-10 my-20">
        <div className="flex flex-col gap-5 w-[20%]">
          <NavLink
            className="bg-gray-300 px-3 py-2 rounded-full text-center"
            to="/category/all"
          >
            All
          </NavLink>
          <NavLink
            className="bg-gray-300 px-3 py-2 rounded-full text-center"
            to="/category/accessories"
          >
            Accessories
          </NavLink>
          <NavLink
            className="bg-gray-300 px-3 py-2 rounded-full text-center"
            to="/category/smartphones"
          >
            Smartphones
          </NavLink>
          <NavLink
            className="bg-gray-300 px-3 py-2 rounded-full text-center"
            to="/category/tablets"
          >
            Tablets
          </NavLink>
          <NavLink
            className="bg-gray-300 px-3 py-2 rounded-full text-center"
            to="/category/laptops"
          >
            Laptops
          </NavLink>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
