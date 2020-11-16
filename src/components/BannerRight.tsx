import React from 'react';
import './BannerRight.scss';
import banner from '../img/Banner-right.png';

const BannerRight = () => {
  return (
    <div className="BannerRight">
      <img src={banner} alt="" />
    </div>
  );
};

export default BannerRight;
