import StarIcon from '@material-ui/icons/Star';
import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, price, title, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>

        <p className='checkoutProduct__price'>
          <small>€</small>
          <strong>{price}</strong>
        </p>

        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <StarIcon className='product__star' />
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from the basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
