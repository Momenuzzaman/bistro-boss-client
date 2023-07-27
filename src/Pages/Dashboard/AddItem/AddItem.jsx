import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  // img_url
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgUrl = imageResponse.data.display_url;
          const { category, name, price, recipe } = data;
          const newItem = {
            category: category.toLowerCase(),
            name,
            price: parseFloat(price),
            recipe,
            image: imgUrl,
          };
          axiosSecure.post("/menu", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              toast.success("Successfully Add New Item!");
            }
          });
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Bistro Boss | Add Item</title>
      </Helmet>
      <div className="pt-10">
        <SectionTitle subtitle={"What's new?"} title={"ADD AN ITEM"} />
      </div>
      {/* form */}
      <div>
        <div className="px-3 lg:px-0">
          <div className="max-w-4xl mx-auto bg-[#F3F3F3] mb-[30px] ">
            <div className="w-10/12 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 pt-[90px]">
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Recipe name*
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Category*
                    </label>
                    <select
                      defaultValue=" Pick One"
                      {...register("category", { required: true })}
                      className="select select-warning w-full pt-1 "
                    >
                      <option disabled>Pick One</option>
                      <option>Pizza</option>
                      <option>Soup</option>
                      <option>Salad</option>
                      <option>Drinks</option>
                      <option>Dessert</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Price*
                    </label>
                    <input
                      type="number"
                      {...register("price", { required: true })}
                      className="w-full border border-gray-300 p-3 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Recipe Details*
                  </label>
                  <textarea
                    rows={8}
                    {...register("recipe", { required: true })}
                    className="w-full border border-gray-300 p-2 rounded-md "
                    required
                  ></textarea>
                </div>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input  file-input-sm w-64"
                />
                <div className=" py-[20px] text-white">
                  <button
                    style={{
                      backgroundColor:
                        "rgba(131, 93, 35, 1), rgba(181, 129, 48, 1)",
                    }}
                    type="submit"
                    className=" font-bold py-3 px-8 rounded mb-1"
                  >
                    <div className="flex">
                      <p>Add Item</p>
                      <ImSpoonKnife className="dashboardNavIcon" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
