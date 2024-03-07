import React from "react";
import "./Popular.scss";
import Item from "../Item/Item";
import data from "../../Assets/data";
const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <div className="popular__item">
        {data.map((item, index) => (
          <Item
            key={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
