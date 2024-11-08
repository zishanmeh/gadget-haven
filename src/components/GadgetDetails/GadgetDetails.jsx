import { useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { cartContext } from "../../App";
import { handleCartContext } from "../../App";
import { wishListContext } from "../../App";
import { handleWishListContext } from "../../App";
import { useContext } from "react";
import { isAddingToWishListContext } from "../../App";
const GadgetDetails = () => {
  const gadgets = useLoaderData();
  const { product_id } = useParams();
  const gadget = gadgets.gadgets.find((g) => g.product_id == product_id);
  const {
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
    water_resistance,
  } = gadget;
  const cart = useContext(cartContext);
  const wishList = useContext(wishListContext);
  const handleAddToCart = useContext(handleCartContext);
  const handleWishList = useContext(handleWishListContext);
  const isAddingToWishList = useContext(isAddingToWishListContext);

  //   const addItemToCart = () => {
  //     handleAddToCart(gadget);
  //     console.log(cart);
  //   };

  return (
    <div className="bg-primaryColor w-full mt-10 pt-7 pb-52 relative">
      <h1 className="text-4xl text-white font-bold text-center ">
        Product details
      </h1>
      <p className="text-sm text-white text-center w-2/3 my-6 mx-auto">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>

      {/* Product */}
      {/*  "product_id": 10,
      "product_title": "Smartwatch Series 5",
      "product_image": "smartwatch_series_5.jpg",
      "category": "Accessories",
      "price": 349,
      "description": "Advanced smartwatch with fitness tracking and customizable watch faces.",
      "specification": [
        "1.5-inch OLED display",
        "GPS and cellular",
        "Heart rate monitor"
      ],
      "availability": true,
      "rating": 4.7,
      "water_resistance": "50 meters" */}
      <div className="hero bg-base-200 w-3/4 absolute -bottom-full left-1/2 -translate-x-1/2 rounded-xl px-4">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-h-sm rounded-lg shadow-2xl"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">{gadget.product_title}</h1>
            <p className="font-bold text-gray-700">
              <span className="">Price: $</span>
              {gadget.price}
            </p>
            {/* btn btn-xs bg-green-100 border border-green-600 text-green-600 */}
            <button
              className={
                availability
                  ? "btn btn-xs bg-green-100 border border-green-600 text-green-600 w-fit"
                  : "btn btn-xs bg-red-100 border border-red-600 text-red-600 w-fit"
              }
            >
              {availability ? "in Stock" : "Out of Stock"}
            </button>
            <p className="text-gray-700">{description}</p>
            <div>
              <p className="font-bold">Specification: </p>
              <ul className="list-disc list-inside">
                {specification.map((s, idx) => (
                  <li key={idx} className="text-gray-700">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="flex gap-2 items-center">
                Rating <FaStar className="text-yellow-500"></FaStar>
              </p>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <CiStar size={20} className=""></CiStar>
                <button className="btn btn-xs">{rating}</button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleAddToCart(gadget)}
                className="btn btn-primary hover:bg-white hover:text-primaryColor bg-primaryColor border-primaryColor text-white w-fit"
              >
                Add to Cart <IoCartOutline size={20}></IoCartOutline>
              </button>
              <button
                onClick={() => handleWishList(gadget)}
                className={`p-2 rounded-full text-primaryColor border border-primaryColor ${
                  isAddingToWishList && "text-gray-500 border-gray-500"
                }`}
                disabled={isAddingToWishList}
              >
                <CiHeart size={30} className=""></CiHeart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
