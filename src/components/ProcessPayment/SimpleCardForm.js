import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const SimpleCardForm = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <CardElement className="form-control" />
        </div>
        <div className="form-group">
          <button className="form-control btn btn-info" type="submit" disabled={!stripe}>
            Order Now
          </button>
          {paymentError && <p className="text-danger mt-5">{paymentError}</p>}
          {paymentSuccess && <p className="text-success mt-5">Your Payment successFull</p>}
        </div>
      </form>
    </div>
  );
};

export default SimpleCardForm;
