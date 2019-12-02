import React from 'react';
import Slider from 'react-styled-carousel';

import '../style/LikeSlider.scss'

const defaultImageArray = [];

const LikeSlider = (props) =>  {
  const responsive = [
    { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 660, cardsToShow: 4 },
  ];
  const {
    customResponsive,
    customClsName,
    padding,
    productImageList,
    handleProductImageChange,
    selectedIndex,
    showArrows = true
  } = props;
  const responsiveLayout = customResponsive || responsive;
  const imageArray = (productImageList && productImageList.length) ? productImageList : defaultImageArray;
  return (
    <Slider
    responsive={responsiveLayout}
    autoSlide={false}
    showDots={false}
    showArrows={showArrows}
    padding={padding || ''}
    >
      {
        imageArray && imageArray.map((item, index) => {
          return (
            <div key={index}>
              {item.label ? <div className="rec-label">{item.label}</div>: null}
              <img
                onClick={(e) => { handleProductImageChange ? handleProductImageChange(item.id) : '' }} 
                className={`${customClsName || 'rec-image'} ${selectedIndex === item.id ? 'selected-img' : ''}`} 
                src={item.url}>
                </img>
              {/* <div className="rec-name">{item.name}</div>
              <div className="rec-price">${item.price}</div> */}
            </div>
          )
        })
      }
  </Slider>
    )
};


export default LikeSlider;