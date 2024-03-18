import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartItems.scss";
import { ShopContext } from "../../Context/ShopContext";

export default function CartItems() {
  const { cartItems, all_data, removeFromCart } = useContext(ShopContext);

  const itemsInCart = Object.entries(cartItems)
    .filter(([itemId, quantity]) => quantity > 0)
    .map(([itemId, quantity]) => {
      let itemDetails = all_data.find((item) => item.id === parseInt(itemId));
      itemDetails = { ...itemDetails, quantity };

      return itemDetails;
    });

  return (
    <div className="cartitems">
      <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {itemsInCart.map((item) => {
        return (
          <div>
            <div className=" cartitems-main cartitems-value" key={item.id}>
              <img
                src={item.image}
                className="cartitems-value-icon"
                alt={item.name}
              />
              <p>{item.name}</p>
              <p>${item.new_price}</p>
              <button className="cartitems-value-quantity">
                {item.quantity}
              </button>
              <p>${item.new_price * item.quantity}</p>
              <div className="cartitems-value-delete">
                <DeleteIcon onClick={() => removeFromCart(item.id)} />
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <div className="cartitems-down">
        <div className="cartitems-down-heading">
            <h1>Cart Totals</h1>
        </div>
        <div className="cartitems-down-subtotal">
            <p>Subtotal</p>
            <p>${0}</p>
        </div>
        <div className="cartitems-down-subtotal">

        </div>
      </div>
    </div>
  );
}
