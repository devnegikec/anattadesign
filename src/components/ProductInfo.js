import React from 'react';

import '../style/ProductInfo.scss';

const ProductInfo = ({ product, colorList, sizeList }) => {
    return (
        <div className="product-detail">
            <div className="product-detail-row">
                <div className="product-detail-name">
                    <h1>{product.name}</h1>
                    <span>OCA LOW</span>
                </div>

                <div className="product-detail-price">
                    <p className="price">${product.price} USD</p>
                    <div className="product-detail-review">
                        <ul className="product-detail-stars">
                            <li>
                                *
                            </li>
                            <li>
                                *
                            </li>
                            <li>
                                *
                            </li>
                            <li>
                                *
                            </li>
                            <li>
                                *
                            </li>
                        </ul>
                        <span>154 Reviews</span>
                    </div>
                </div>
            </div>

            <div className="product-detail-box-container">
                <div className="product-detail-box">
                    <div className="tabs">
                        <button className="left active" type="button">
                            Men
                        </button>
                        <button className="right" type="button">
                            Women
                        </button>
                    </div>
                    <div className="color-selection">
                        <span>Select color</span>

                        <ul className="color-list">
                            {colorList.map((color, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={`color-list-item ${
                                                index === 1 ? 'active' : ''
                                            }`}
                                            style={{
                                                background: `${color}`,
                                            }}
                                        />
                                    )
                            })}
                        </ul>
                    </div>
                    <div className="size-selection">
                        <div className="size-row">
                            <span>Select size</span>
                            <span className="underline">
                                Size &#38; Fit Guide
                            </span>
                        </div>
                        <ul className="size-list">
                            {sizeList.map((size, index) => (
                                <li
                                    key={index}
                                    className={`size-list-item ${
                                        index === 2 ? 'disabled' : ''
                                    }`}
                                >
                                    {size}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <button className="addButton" type="button">
                Add to bag
            </button>

            <div className="additionInfo">
                <p>Worldwide Shipping + Free Returns</p>
            </div>
        </div>
    )
}

export default ProductInfo
