import Category from "../Category/Category";
import Gadgets from "../Gadgets/Gadgets";
import Hero from "../Hero/Hero";
import { useState, useEffect } from "react";
import { createContext } from "react";
export const cartContext = createContext([]);
export const handleCartContext = createContext(() => {});
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/category/all", { replace: true });
  }, [navigate]);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (gadget) => {
    const newCartProduct = [...cart, gadget];
    setCart(newCartProduct);
    console.log("clicked");
  };
  return (
    <div className="">
      <cartContext.Provider value={cart}>
        <handleCartContext.Provider value={handleAddToCart}>
          <Hero></Hero>
          <Gadgets></Gadgets>
        </handleCartContext.Provider>
      </cartContext.Provider>
    </div>
  );
};

export default Home;
