import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUserShield } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });
  // make admin
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an Admin Now!`);
        }
      });
  };
  // user delete
  const handleDeleteUser = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
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
            if (data.deletedCount === 1) {
              refetch();
              Swal.fire(`${user.name} deleted successfully.`);
            }
          }
        });
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Bistro Boss | All User</title>
      </Helmet>
      <div className="pt-10">
        <SectionTitle subtitle={"How many??"} title={"MANAGE ALL USERS"} />
      </div>
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-3xl font-medium">
          Total Users: {allUser.length}
        </h3>
        <div className="overflow-x-auto mt-3">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allUser.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="bg-[#D1A054] text-white p-2 rounded"
                      >
                        <FaUserShield className="w-6 h-6" />
                      </button>
                    )}
                  </td>
                  <td className="w-10">
                    <button
                      onClick={() => handleDeleteUser(user)}
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

export default AllUser;
