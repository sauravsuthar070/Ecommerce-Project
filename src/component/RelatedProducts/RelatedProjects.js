import React from "react";
import "./RelatedProjects.css";
import Item from "../Item/Item";
import data_product from "../Assegts/data";
const RelatedProjects = () => {
  return (
    <div className="relatedproducts">
      <h1>Relented products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProjects;
