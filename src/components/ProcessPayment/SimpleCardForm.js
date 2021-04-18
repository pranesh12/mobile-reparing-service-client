import React, { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { userContext } from "../../App";

const SimpleCardForm = () => {
  const { buyerData } = useContext(userContext);
  const { login } = useContext(userContext);

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

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

  const handlePaymentSubmit = () => {
    const paymentData = {
      name: login.name,
      email: login.email,
      title: buyerData.title,
      price: buyerData.price,
      card: "Credit Card",
    };
    fetch("http://localhost:5000/addPayment", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(paymentData),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <CardElement className="form-control" />
        </div>
        <div className="form-group">
          <button
            onClick={handlePaymentSubmit}
            className="form-control btn btn-info"
            type="submit"
            disabled={!stripe}>
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
