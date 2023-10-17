import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-tems";
import { useNavigate } from "react-router-dom";

import "./cart.css";
const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/home")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/home");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart