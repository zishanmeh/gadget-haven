import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowGadgets from "../ShowGadgets/ShowGadgets";
import { createContext } from "react";
export const GadgetCategoryContext = createContext({});

const Category = () => {
  const gadgets = useLoaderData();
  const { category } = useParams();

  return (
    <div className="grid grid-cols-3 gap-6 justify-between w-full">
      {gadgets.length > 0 ? (
        gadgets.map((gadget) => (
          <div key={gadget.product_id} className="">
            <GadgetCategoryContext.Provider
              value={gadget}
              key={gadget.product_id}
            >
              <ShowGadgets></ShowGadgets>
            </GadgetCategoryContext.Provider>
          </div>
        ))
      ) : (
        <div className="">
          <h1 className="text-4xl font-bold text-center">No Data Found 😭</h1>
        </div>
      )}
    </div>
  );
};

export default Category;
