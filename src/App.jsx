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
export const handleAddToCartFromWishListContext = createContext(() => {});
export const handleRemoveWishListContext = createContext(() => {});
export const isAddingToWishListContext = createContext();
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
      toast.warn(`${gadget.product_title} Removed from cart.`);
    } else {
      console.warn("Gadget not found in cart");
    }
  };
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);
  const handleWishList = async (gadget) => {
    if (!wishList.includes(gadget)) {
      const newWishProduct = [...wishList, gadget];
      setWishList(newWishProduct);
      toast.info(`${gadget.product_title} Added to wishlist.`);
      setIsAddingToWishList(true);
    } else {
      toast.error(`${gadget.product_title} already in wishlist`);
    }
  };

  const handleAddToCartFromWishList = (gadget) => {
    const newCartProduct = [...cart, gadget];
    setCart(newCartProduct);
    toast.info(`${gadget.product_title} Added to cart.`);

    const gadgetIndex = wishList.findIndex((item) => item === gadget);

    if (gadgetIndex !== -1) {
      const newCart = [...wishList];
      newCart.splice(gadgetIndex, 1);
      setWishList(newCart);
      toast.warn(`${gadget.product_title} Removed from Wishlist.`);
    } else {
      console.warn("Gadget not found in cart");
    }
  };

  const handleRemoveWishList = (gadget) => {
    const gadgetIndex = wishList.findIndex((item) => item === gadget);

    if (gadgetIndex !== -1) {
      const newCart = [...wishList];
      newCart.splice(gadgetIndex, 1);
      setWishList(newCart);
      toast.warn(`${gadget.product_title} Removed from Wishlist.`);
    } else {
      console.warn("Gadget not found in cart");
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
                        <handleAddToCartFromWishListContext.Provider
                          value={handleAddToCartFromWishList}
                        >
                          <handleRemoveWishListContext.Provider
                            value={handleRemoveWishList}
                          >
                            <isAddingToWishListContext.Provider
                              value={isAddingToWishList}
                            >
                              <Navbar></Navbar>
                              <Outlet></Outlet>,
                              <ToastContainer />
                            </isAddingToWishListContext.Provider>
                          </handleRemoveWishListContext.Provider>
                        </handleAddToCartFromWishListContext.Provider>
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
