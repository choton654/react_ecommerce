import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51GvznyDnbzVw245GypYWl0LjXn1sfUGAdKrhr7yGkt7583oV8ijqrWXoy7p49cGdmGcYHnJIJPSLKPpd8KbHn0WT00DkEE5ydG';

  const onToken = (token) => {
    console.log(token);
    alert('payment successfull');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
