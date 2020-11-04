import React from 'react';
import HomePage from './HomePage';
import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';
import './Shop.scss';

const Shop = () => {
  return (
    <div className="Shop">
      <BannerLeft />
      <HomePage />
      <BannerRight />
    </div>
  );
};

export default Shop;
