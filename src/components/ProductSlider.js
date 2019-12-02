import React, { useState } from 'react';
import '../style/ProductSlider.scss';

const ProductSlider = ({ images }) => {
    const [activePhoto, setActivePhoto] = useState(0)

    let PhotoPreview
    if (images.length > 0) {
        PhotoPreview = (
            <>
                <button
                    className="carousel-preview-leftArr"
                    type="button"
                    onClick={() => {
                        if (!activePhoto - 1 < 0) {
                            setActivePhoto(activePhoto - 1)
                        }
                    }}
                >
                </button>
                <button
                    className="carousel-preview-rightArr"
                    type="button"
                    onClick={() => {
                        if (activePhoto + 1 < images.length) {
                            setActivePhoto(activePhoto + 1)
                        }
                    }}
                >
                </button>
                <img
                    className="carousel-thumbnail-img"
                    src={images[activePhoto].url}
                    alt="Preview T-shirt"
                />
            </>
        )
    }
    return (
        <div className="image-slider">
            <div className="carousel-preview">{PhotoPreview}</div>
            <div className="carousel-thumbnails-container">
                <button
                    className="left-arrow"
                    type="button"
                    onClick={() => {
                        if (!activePhoto - 1 < 0) {
                            setActivePhoto(activePhoto - 1)
                        }
                    }}
                >
                </button>
                <button
                    className="right-arrow"
                    type="button"
                    onClick={() => {
                        if (activePhoto + 1 < images.length) {
                            setActivePhoto(activePhoto + 1)
                        }
                    }}
                >
                </button>
                <ul className="carousel-thumbnails">
                    {images
                        ? images.map((photo, index) => (
                              <li
                                  key={index}
                                  className={`carousel-thumbnail ${
                                      index === activePhoto ? 'active' : ''
                                  }`}
                                  onClick={() => {
                                      setActivePhoto(index)
                                  }}
                              >
                                  <img
                                      className="carousel-thumbnail-img"
                                      src={photo.url}
                                      alt={index}
                                  />
                              </li>
                          ))
                        : 'Loading'}
                </ul>
            </div>
        </div>
    )
}

export default ProductSlider;
