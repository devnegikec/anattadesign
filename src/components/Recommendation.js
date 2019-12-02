import React from 'react'

import useWindowDimensions from './WindowDimensions'
import RecommendationGrid from './RecommendationGrid'
import LikeSlider from './LikeSlider'
import '../style/Recommendation.scss'

const RecommendProducts = ({ images }) => {
    const { width } = useWindowDimensions();
    const imageComp = width > 769 ? (<LikeSlider productImageList={images} />) : (<RecommendationGrid imageArray={images} />);
  return (
        <section className="recommend-section">
            <h1>You'll Also Like</h1>
            {imageComp}
        </section>
    )
}

export default RecommendProducts