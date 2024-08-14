import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../component/Assegts/dropdown_icon.png";
import Item from "../component/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1 to 12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="products">
        {/* {all_product.map((item, i) => {
          console.log(item);
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })} */}

{all_product.map((item) => {
  console.log(item); // Check what this logs to ensure it's correct
  
  if (props.category === item.category) {
    return (
      <Item
        key={item.id} // Preferably use a unique key like `item.id` if available
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    );
  }

  return null; // Explicitly return null if the condition isn't met
})}
      </div>
    </div>
  );
};

export default ShopCategory;
