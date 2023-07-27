import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
const MyCart = () => {
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // delete item
  const handleDeleteButton = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your food has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleGoPayment = () => {
    navigate("/dashboard/payment");
  };

  return (
    <div className="w-10/12">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="pt-10">
        <SectionTitle subtitle={"My Cart"} title={"WANNA ADD MORE?"} />
      </div>
      <div className="max-w-5xl mx-auto ">
        <div className=" flex justify-between text-2xl md:text-4xl">
          <p>Total orders: {cart.length}</p>
          <p>total price: ${total}</p>
          <Link to="/dashboard/payment">
            <button className="btn btn-warning">PAY</button>
          </Link>
        </div>
        <div className="overflow-x-auto mt-9">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054]">
              <tr>
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td className="text-end w-10 font-medium">${item?.price}</td>
                  <td className="w-10">
                    <button
                      onClick={() => handleDeleteButton(item._id)}
                      className="btn btn-ghost   bg-red-600 hover:bg-red-700  "
                    >
                      <RiDeleteBin5Line className="w-6 h-6 text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
