import React from 'react'
import { useParams } from "react-router-dom";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_f3duw0VsAEM2TJFMtWQ90QAT');




export default function Buy() {

  const { id } = useParams();

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  const CheckoutForm = () => {
    return (
      <form>
        <PaymentElement />
            <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
        <button>Submit</button>
      </form>
    );
  };

};