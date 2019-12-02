import React, { useState, useEffect } from 'react'
import axios from 'axios';

import ProductSlider from './ProductSlider';
import ProductInfo from './ProductInfo';

import RecommendationModule from './Recommendation';
import '../style/ProductDetailPage.scss';


const ProductDetailPage = () => {
    const [images, setImages] = useState([])
    const [product, setProduct] = useState([])
    const [errors, setError] = useState(false)
    const colorList = [
      '#E91E63',
      '#8b608a',
      '#607D8B',
      '#E91E63',
      '#2196F3',
      '#FFA500'
    ]
    const sizeList = ['5', '5.5', '6', '7', '8', '8.5', '9']
    useEffect(() => {
      axios.get('https://anatta-demo-app.herokuapp.com/api/images')
        .then(response =>setImages(response.data.slice(0, 6)))
        .catch(error => setError(error));
    }, []);


    useEffect(() => {
      axios.get('https://anatta-demo-app.herokuapp.com/api/products/3')
        .then(response =>setProduct(response))
        .catch(error => setError(error));
    }, []);

    const ProductDetail = () => (
      <React.Fragment>
            <div className="container product-detail-container">
                <ProductInfo product={product} colorList={colorList} sizeList={sizeList} />
                <ProductSlider images={images} />
            </div>
            <RecommendationModule images={images} />
      </React.Fragment>
    )

    return <>{errors ? <p>API ERROR</p> : <ProductDetail />}</>
}

export default ProductDetailPage