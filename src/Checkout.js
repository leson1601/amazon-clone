import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/03/AMAZON-FASHION/2021/FASHION/PROMO/MSS21/LANDING_PAGE/d/LP_BANNER_DESKTOP.jpg'
          alt=''
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, please
              click on "Add to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Shopping basket</h2>
            {basket.map((item) => (
              <CheckoutProduct {...item} />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className='checkout__right'>
          <h1>Subtotal</h1>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
