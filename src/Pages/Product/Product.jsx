import React, { useContext } from "react";
import "./Product.scss";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../../Componenets/BreadCrums/BreadCrums";
const Product = () => {
  const all_data = useContext(ShopContext);
  const { productId } = useParams();//string
  console.log(typeof productId);
  
  const product = all_data.find((item) => {
    console.log(typeof item.id);//number 
    return item.id === parseInt(productId);
  });

  return (
    <div>
      {product ? (
        <BreadCrums product={product} />
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default Product;
