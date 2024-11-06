import { useLoaderData } from "react-router-dom";
import ShowGadgets from "../ShowGadgets/ShowGadgets";
import { createContext } from "react";
export const GadgetsContext = createContext({});

const AllGadgets = () => {
  const data = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-6 justify-between">
      {data.gadgets.map((gadget) => (
        <GadgetsContext.Provider value={gadget} key={gadget.product_id}>
          <ShowGadgets></ShowGadgets>
        </GadgetsContext.Provider>
      ))}
    </div>
  );
};

export default AllGadgets;
