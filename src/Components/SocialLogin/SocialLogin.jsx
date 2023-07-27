import React from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // login
  const handlerLogin = () => {
    loginWithGoogle().then((result) => {
      console.log(result.user);
      const loggedUser = result.user;
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlerLogin}
        className="btn btn-circle btn-outline btn-sm"
      >
        <FaGoogle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SocialLogin;
