import { NavLink } from "react-router-dom";
import Banner from "../../assets/banner.jpg";
const Hero = () => {
  return (
    <div className=" bg-primaryColor flex flex-col justify-center gap-5 items-center text-white pt-9 pt-5 pb-60 relative">
      <h1 className="text-5xl font-bold text-center lg:w-10/12">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="text-sm lg:w-1/2 text-center mx-auto">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="text-center">
        <button className="bg-white py-2 px-4 rounded-full text-primaryColor font-bold">
          <NavLink to="/dashboard">Shop Now</NavLink>
        </button>
      </div>
      <div className="absolute  -bottom-1/2 bg-whiteBg w-1/2 p-3 rounded-xl">
        <img
          src={Banner}
          alt="Banner image"
          className="w-full mx-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
