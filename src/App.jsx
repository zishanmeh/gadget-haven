import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { createContext } from "react";
export const cartContext = createContext([]);
export const wishListContext = createContext([]);
export const handleCartContext = createContext(() => {});
export const handleWishListContext = createContext(() => {});
export const handleRemoveCartContext = createContext(() => {});
export const handleSortBypriceContext = createContext(() => {});
export const handlePurchaseContext = createContext(() => {});
export const totalPriceContext = createContext();
export const previousTotalPriceContext = createContext();
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
  const handleRemoveCart = (gadget) => {
    const gadgetIndex = cart.findIndex((item) => item === gadget);

    if (gadgetIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(gadgetIndex, 1);
      setCart(newCart);
      toast.info(`${gadget.product_title} Removed from cart.`);
    } else {
      console.warn("Gadget not found in cart");
    }
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

  const handleSortByprice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  let totalPrice = 0;
  for (const c of cart) {
    totalPrice = totalPrice + c.price;
  }

  const [previousTotalPrice, setPreviousTotalPrice] = useState(0);
  const handlePurchase = () => {
    if (cart.length > 0) {
      setPreviousTotalPrice(totalPrice);
      document.getElementById("my_modal_5").showModal();
      setCart([]);
    } else {
      toast.error("No item on cart 😭");
    }
  };

  return (
    <div className="">
      <cartContext.Provider value={cart}>
        <wishListContext.Provider value={wishList}>
          <handleCartContext.Provider value={handleAddToCart}>
            <handleWishListContext.Provider value={handleWishList}>
              <handleRemoveCartContext.Provider value={handleRemoveCart}>
                <handleSortBypriceContext.Provider value={handleSortByprice}>
                  <handlePurchaseContext.Provider value={handlePurchase}>
                    <totalPriceContext.Provider value={totalPrice}>
                      <previousTotalPriceContext.Provider
                        value={previousTotalPrice}
                      >
                        <Navbar></Navbar>
                        <Outlet></Outlet>,
                        <ToastContainer />
                      </previousTotalPriceContext.Provider>
                    </totalPriceContext.Provider>
                  </handlePurchaseContext.Provider>
                </handleSortBypriceContext.Provider>
              </handleRemoveCartContext.Provider>
            </handleWishListContext.Provider>
          </handleCartContext.Provider>
        </wishListContext.Provider>
      </cartContext.Provider>
    </div>
  );
}

export default App;
