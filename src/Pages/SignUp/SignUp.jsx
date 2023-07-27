import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import loginImg from "../../../src/assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("http://localhost:8000/users", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  toast.success("Successfully Create Account");
                  navigate("/");
                }
              });
            console.log("update user");
          })
          .catch((error) => console.log(error.message));
      })
      .catch((err) => console.log(err.message));
    reset();
  };

  return (
    <div className="loginBg h-screen">
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div className="py-16">
        <div className="w-10/12 mx-auto formBg">
          <div className="flex items-center md:h-[732px]  justify-center">
            <div className="max-w-7xl mx-auto px-3 lg:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Side - Image */}
                <div className="md:order-2 hidden md:block">
                  <img
                    src={loginImg}
                    alt="Login Image"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Right Side - Form */}
                <div className="md:order-1">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-sm mx-auto bg-transparent p-1 "
                  >
                    <h2 className="text-2xl text-center font-bold mb-6">
                      Sign Up
                    </h2>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-semibold"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name")}
                        name="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-semibold"
                      >
                        PhotoURL
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("photoURL")}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 font-semibold"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <span className="text-red-600">Email is required</span>
                      )}
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="password"
                        className="block mb-2 font-semibold"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          maxLength: 20,
                          pattern:
                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                        })}
                        name="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                        placeholder="Enter your password"
                      />
                      {errors.password?.type === "required" && (
                        <p className="text-red-600">Password is required</p>
                      )}
                      {errors.password?.type === "minLength" && (
                        <p className="text-red-600">
                          Password must be 6 characters
                        </p>
                      )}
                      {errors.password?.type === "pattern" && (
                        <p className="text-red-600">
                          Password must have 1 uppercase 1 lowercase 1 number
                          and 1 space character.
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#D1A054] text-white font-semibold py-2 rounded hover:bg-yellow-600 mb-5 "
                    >
                      Sign In
                    </button>
                  </form>
                  <p className="text-center text-[#D1A054] text-base font-medium pb-4">
                    Already registered?
                    <span>
                      <Link to="/login"> Go to log In</Link>
                    </span>
                  </p>
                  <p className="text-center font-medium">Or Sign up with</p>
                  <SocialLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
