import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-YTMyZjZjMzAt-w1500._CB657354263_.jpg'
        alt='banner'
      />

      <div className='home__row'>
        <Product
          id='1356'
          title='Baby Product'
          price={54.99}
          rating={5}
          image='https://m.media-amazon.com/images/I/41bTQ3T4h+L._AC_SY240_.jpg'
        />
        <Product
          id='1231'
          title='Title'
          price={11.12}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id='0123'
          title='Alexa'
          price={499}
          rating={5}
          image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24'
        />
        <Product
          id='1122'
          title='Coffee maschine'
          price={200}
          rating={4}
          image='https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/XCM_CUTTLE_1305636_1563018_NL_3655680_379x304_1X_nl_NL._SY304_CB659656767_.jpg'
        />
        <Product
          id='1111'
          title='T-shirt'
          price={10}
          rating={4}
          image='https://m.media-amazon.com/images/I/41u9CcvEufL._AC_SY200_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
