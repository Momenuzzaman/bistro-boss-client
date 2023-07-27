import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  console.log(stripePromise);

  const [cart] = useCart();
  const total = cart.reduce((total, item) => total + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-11/12">
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <div className="pt-10">
        <SectionTitle subtitle={"Please Process"} title={"Payment"} />
      </div>
      <div className="max-w-3xl mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
