import React, { useContext } from "react";
import { cartContext, handleRemoveCartContext } from "../../App";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Cart = () => {
  const cart = useContext(cartContext);
  const handleRemoveCart = useContext(handleRemoveCartContext);
  let totalPrice = 0;
  for (const c of cart) {
    totalPrice = totalPrice + c.price;
  }
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Cart</h1>
        <div className="flex justify-end items-center gap-4">
          <h4 className="font-bold text-xl">Total Cost : {totalPrice}</h4>
          <button className="btn bg-transparent border border-primaryColor px-5 py-3 rounded-full text-primaryColor hover:bg-primaryColor hover:text-white">
            Sort by price
          </button>
          <button className="btn hover:bg-white hover:text-primaryColor bg-primaryColor px-5 py-3 rounded-full border border-primaryColor text-white">
            Purchase
          </button>
        </div>
      </div>
      <div className="mt-10">
        {cart.length > 0
          ? cart.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-5 items-center mb-5 shadow-lg p-4 rounded-lg"
              >
                <div>
                  <img src={item.product_image} alt={item.product_title} />
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    <h1 className="text-xl font-bold">{item.product_title}</h1>
                    <p className="text-sm text-gray-600 my-4">
                      {item.description}
                    </p>
                    <p className="font-bold text-lg">Price: ${item.price}</p>
                  </div>
                  <IoIosCloseCircleOutline
                    size={30}
                    className="cursor-pointer"
                    color="red"
                    onClick={() => handleRemoveCart(item)}
                  ></IoIosCloseCircleOutline>
                </div>
              </div>
            ))
          : "No Data Found"}
      </div>
    </div>
  );
};

export default Cart;
