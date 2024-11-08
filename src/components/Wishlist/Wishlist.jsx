import { useContext } from "react";
import {
  wishListContext,
  handleAddToCartFromWishListContext,
  handleRemoveWishListContext,
  isAddingToWishListContext,
} from "../../App";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Wishlist = () => {
  const wishList = useContext(wishListContext);
  const handleAddToCartFromWishList = useContext(
    handleAddToCartFromWishListContext
  );
  const isAddingToWishList = useContext(isAddingToWishListContext);
  const handleRemoveWishList = useContext(handleRemoveWishListContext);
  return (
    <div className="w-11/12 mx-auto my-10">
      <div>
        <h1 className="font-bold text-xl">WishList</h1>
      </div>
      <div>
        {wishList.length > 0 ? (
          wishList.map((item, idx) => (
            <div
              key={item.product_id}
              className="flex gap-5 items-center mb-5 shadow-lg p-4 rounded-lg"
            >
              <div>
                <img
                  className="h-[200px]"
                  src={item.product_image}
                  alt={item.product_title}
                />
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <h1 className="text-xl font-bold">{item.product_title}</h1>
                  <p className="text-sm text-gray-600 my-4">
                    {item.description}
                  </p>
                  <p className="font-bold text-lg">Price: ${item.price}</p>
                  <button
                    onClick={() => handleAddToCartFromWishList(item)}
                    className="mt-4 btn bg-primaryColor border-primaryColor text-white rounded-full"
                  >
                    Add to cart
                  </button>
                </div>
                <IoIosCloseCircleOutline
                  size={30}
                  className="cursor-pointer"
                  color="red"
                  onClick={() => handleRemoveWishList(item)}
                ></IoIosCloseCircleOutline>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center font-bold text-4xl">No data found</h1>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
