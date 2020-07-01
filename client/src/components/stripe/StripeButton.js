import axios from 'axios';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51GvznyDnbzVw245GypYWl0LjXn1sfUGAdKrhr7yGkt7583oV8ijqrWXoy7p49cGdmGcYHnJIJPSLKPpd8KbHn0WT00DkEE5ydG';

  const onToken = (token) => {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => alert('payment successfull'))
      .catch((err) => {
        console.log('payment error', JSON.parse(err));
        alert('There was a issue with your payment');
      });
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
