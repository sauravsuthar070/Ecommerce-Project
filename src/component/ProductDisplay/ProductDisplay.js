import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assegts/star_icon.png";
import star_dull_icon from "../Assegts/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
   const {addToCart} = useContext(ShopContext)
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
        <div className="productdisplay-right-starts">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-descryption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          maxime.
        </div>
        <div className="productdisplay-right-size">
          <h1>select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>m</div>
            <div>l</div>
            <div>Xl</div>
            <div>XXL</div>
          </div>
          <button onClick={()=>{addToCart(product.Id)}}>add to cart</button>
          <p className="productdisplay-right-category">
            <span>Category:</span>Women,T-shirt
          </p>
          <p className="productdisplay-right-category">
            <span>Tags:</span>Morderen, latest 
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
