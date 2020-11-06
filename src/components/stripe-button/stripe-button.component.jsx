import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HZacyCe2x8MeE84ziGGuqrUlIywPSGlaItt50yLI4jCgEpTdTProZQYfuFV5bUpI5CUoXUmK9bbfpxHmgzgx1HH00xiJM9GIB';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name="BOB's Fashion Ltd."
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/3cb1cabdd9'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

