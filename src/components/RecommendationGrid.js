import React from 'react';
import '../style/RecommendationGrid.scss';

const RecommendationGrid = ({imageArray}) => {
  return (
      <div className="recommendation-gird">
        {imageArray.map((img) => (
          <div key={img.id}>
          {img.label ? <div className="box-label">{img.label}</div>: null}
          <div className="box">
            <img src= {img.url} />
          </div>
          <div className="box-name">{img.name}</div>
          <div className="box-price">${img.price}</div>
          </div>
        ))}
      </div>
    )
  };

export default RecommendationGrid;