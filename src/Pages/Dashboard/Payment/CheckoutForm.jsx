import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { FaStripe } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import { useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CheckoutForm = ({ price }) => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCartError] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    console.log(card);

    if (card === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCartError(error.message);
    } else {
      setCartError("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn  btn-primary mt-3"
          type="submit"
          disabled={!FaStripe}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 pt-4"> {cardError}</p>}
    </>
  );
};

export default CheckoutForm;
