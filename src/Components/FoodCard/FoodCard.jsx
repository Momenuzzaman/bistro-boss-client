import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const [, refetch] = useCart();
  const { _id, name, image, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      const orderItem = {
        menuId: _id,
        name,
        image,
        price,
        email: user.email,
        userName: user.displayName,
      };
      const postCartItem = async () => {
        const response = await fetch("http://localhost:8000/carts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderItem),
        });
        const data = await response.json();
        refetch(); // refetch cart to update to number of items in the cart
        console.log(data);
        toast.success("Food added on the cart");
      };
      postCartItem();
    } else {
      Swal.fire({
        title: "Please login order the food.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-auto bg-base-100 shadow-xl ">
      <img src={item?.image} alt="food" />
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 py-2 font-medium text-white">
        $ {item?.price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item?.name}</h2>
        <p>{item?.recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item)}
            className="text-xl btn btn-outline border-0 border-b-4 mt-6 w-[200px] text-[#BB8506] bg-gray-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
