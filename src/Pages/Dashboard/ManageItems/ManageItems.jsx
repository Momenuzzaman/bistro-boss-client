import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { RiDeleteBin5Line } from "react-icons/ri";

import { FaUpRightFromSquare } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();
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
        axiosSecure.delete(`/menu/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <div className="pt-10">
        <SectionTitle subtitle={"Hurry Up!"} title={"MANAGE ALL ITEMS"} />
      </div>
      <div className="max-w-5xl mx-auto ">
        <div className="text-2xl md:text-4xl">
          <p>Total Items: {menu.length}</p>
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
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, i) => (
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td className="text-end w-20 font-medium">${item?.price}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteButton(item._id)}
                      className="  btn btn-ghost   bg-[#D1A054] hover:bg-yellow-500 "
                    >
                      <FaUpRightFromSquare className="w-6 h-6 text-white" />
                    </button>
                  </td>
                  <td>
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

export default ManageItems;
