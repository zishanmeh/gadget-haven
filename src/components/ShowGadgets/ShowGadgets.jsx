import { useContext } from "react";
import { GadgetsContext } from "../Gadgets/Gadgets";
import { GadgetCategoryContext } from "../Category/Category";
import { Link } from "react-router-dom";

const ShowGadgets = () => {
  const gadget = useContext(GadgetCategoryContext);

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-start text-center">
        <h2 className="card-title">{gadget.product_title}</h2>
        <p className="text-gray-600">Price: {gadget.price}$</p>
        <div className="card-actions">
          <Link to={`/${gadget.product_id}`}>
            <button className="btn btn-sm rounded-full bg-transparent border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowGadgets;
