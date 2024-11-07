import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { createContext } from "react";
export const cartContext = createContext([]);
export const wishListContext = createContext([]);
export const handleCartContext = createContext(() => {});
export const handleWishListContext = createContext(() => {});
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const handleAddToCart = (gadget) => {
    const newCartProduct = [...cart, gadget];
    setCart(newCartProduct);
    toast.info(`${gadget.product_title} Added to cart.`);
  };
  const handleWishList = (gadget) => {
    if (!wishList.includes(gadget)) {
      const newWishProduct = [...wishList, gadget];
      setWishList(newWishProduct);
      toast.info(`${gadget.product_title} Added to wishlist.`);
    } else {
      toast.error(`${gadget.product_title} already in wishlist`);
    }
  };

  return (
    <div className="">
      <cartContext.Provider value={cart}>
        <wishListContext.Provider value={wishList}>
          <handleCartContext.Provider value={handleAddToCart}>
            <handleWishListContext.Provider value={handleWishList}>
              <Navbar></Navbar>
              <Outlet></Outlet>
              <ToastContainer />
            </handleWishListContext.Provider>
          </handleCartContext.Provider>
        </wishListContext.Provider>
      </cartContext.Provider>
    </div>
  );
}

export default App;
