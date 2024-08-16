import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assegts/star_icon.png';
import star_dull_icon from '../Assegts/star_dull_icon.png';

const ProductDisplay = (props) => {
    const { product } = props;
// console.log(props);
    if (!product) {
        return <div>Product not found</div>; // Optional fallback if the product is missing
    }

    return (
        <div className="productDisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-image">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-start">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
