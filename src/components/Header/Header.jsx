import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="bg-primaryColor px-5 py-3">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default Header;
