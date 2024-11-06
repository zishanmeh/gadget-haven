import { NavLink, Outlet } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Category from "../Category/Category";
import { useEffect, useState } from "react";
import ShowGadgets from "../ShowGadgets/ShowGadgets";
import { createContext } from "react";
export const GadgetsContext = createContext({});

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
      <Tabs>
        <div className="flex items-start my-20 gap-5">
          <div className="w-[20%]">
            <TabList className="flex flex-col">
              <Tab>All Products</Tab>
              <Tab>Phone</Tab>
              <Tab>Tablets</Tab>
              <Tab>Accessories</Tab>
              <Tab>Laptops</Tab>
            </TabList>
          </div>

          <div className="w-3/4">
            <TabPanel className="w-full">
              <div className="grid grid-cols-3 gap-6 justify-between w-full">
                {allProducts.map((gadget) => (
                  <GadgetsContext.Provider
                    value={gadget}
                    key={gadget.product_id}
                  >
                    <ShowGadgets></ShowGadgets>
                  </GadgetsContext.Provider>
                ))}
              </div>
            </TabPanel>
            <TabPanel className="">
              <div className="grid grid-cols-3 gap-6 justify-between">
                {smartPhones.map((gadget) => (
                  <GadgetsContext.Provider
                    value={gadget}
                    key={gadget.product_id}
                  >
                    <ShowGadgets></ShowGadgets>
                  </GadgetsContext.Provider>
                ))}
              </div>
            </TabPanel>
            <TabPanel className="">
              <div className="grid grid-cols-3 gap-6 justify-between">
                {tablets.map((gadget) => (
                  <GadgetsContext.Provider
                    value={gadget}
                    key={gadget.product_id}
                  >
                    <ShowGadgets></ShowGadgets>
                  </GadgetsContext.Provider>
                ))}
              </div>
            </TabPanel>
            <TabPanel className="">
              <div className="grid grid-cols-3 gap-6 justify-between">
                {accessories.map((gadget) => (
                  <GadgetsContext.Provider
                    value={gadget}
                    key={gadget.product_id}
                  >
                    <ShowGadgets></ShowGadgets>
                  </GadgetsContext.Provider>
                ))}
              </div>
            </TabPanel>
            <TabPanel className="">
              <div
                className={
                  laptops.length > 0
                    ? "grid grid-cols-3 gap-6 justify-between"
                    : "w-full text-center font-bold text-4xl"
                }
              >
                {laptops.length > 0
                  ? laptops.map((gadget) => (
                      <GadgetsContext.Provider
                        value={gadget}
                        key={gadget.product_id}
                      >
                        <ShowGadgets></ShowGadgets>
                      </GadgetsContext.Provider>
                    ))
                  : "No data found"}
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
      {/* <li>
              <NavLink to="/category/all">All products</NavLink>
            </li>
            <li>
              <NavLink to="/category/accessories">Accessories</NavLink>
            </li>
            <li>
              <NavLink to="/category/tablets">Tablets</NavLink>
            </li>
            <li>
              <NavLink to="/category/smartphones">SmartPhones</NavLink>
            </li> */}
      {/* Gadgets */}
      {/* <div className="col-span-6">
          <div className="grid grid-cols-3 gap-6 justify-between">
            {data.gadgets.map(() => (
              <h1>Hello</h1>
            ))}
          </div>
          <Outlet></Outlet>
        </div> */}
    </div>
  );
};

export default Gadgets;
