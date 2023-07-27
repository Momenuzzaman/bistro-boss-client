import React, { useContext, useEffect, useRef, useState } from "react";
import loginImg from "../../../src/assets/others/authentication2.png";
import "./Login.css";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [disable, setDisable] = useState(true);
  const { loginUser } = useContext(AuthContext);
  // hook forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  // captcha Validated
  const handleCaptchaValidated = (event) => {
    event.preventDefault();
    const userCaptchaValue = event.target.value;
    if (validateCaptcha(userCaptchaValue)) {
      console.log("ok");
      setDisable(false);
    } else {
      console.log("error");
      setDisable(true);
    }
  };
  // login
  const onSubmit = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("User Login Successful.");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="loginBg h-screen bg-contain">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="py-16">
        <div className="w-10/12 mx-auto formBg">
          <div className="flex items-center md:h-[732px]  justify-center">
            <div className="max-w-7xl mx-auto px-3 lg:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Side - Image */}
                <div className="hidden md:block">
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
                      Login
                    </h2>
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
                        name="email"
                        {...register("email")}
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
                        name="password"
                        {...register("password")}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                        placeholder="Enter your password"
                      />
                      {errors.password && (
                        <span className="text-red-600">
                          password is must be required
                        </span>
                      )}
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="password"
                        className="block mb-2 font-semibold"
                      >
                        <LoadCanvasTemplate />
                      </label>
                      <input
                        onBlur={handleCaptchaValidated}
                        type="text"
                        name="captcha"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D1A054]"
                        placeholder="Enter your valid captcha"
                      />
                    </div>
                    <button
                      disabled={disable}
                      type="submit"
                      className="w-full bg-[#D1A054] text-white font-semibold py-2 rounded hover:bg-yellow-600 mb-5 disabled:opacity-50"
                    >
                      Sign In
                    </button>
                  </form>
                  <p className="text-center text-[#D1A054] text-base font-medium pb-4">
                    New here?
                    <span>
                      <Link to="/signup"> Create a New Account</Link>
                    </span>
                  </p>
                  <p className="text-center font-medium">Or Sign in with</p>
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

export default Login;
