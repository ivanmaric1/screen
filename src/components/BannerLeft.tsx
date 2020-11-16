import React from 'react';
import './BannerLeft.scss';
import banner from '../img/Banner-left.png';

const BannerLeft = () => {
  return (
    <div className="BannerLeft">
      <img src={banner} alt="" />
    </div>
  );
};

export default BannerLeft;
