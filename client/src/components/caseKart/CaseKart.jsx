import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  
  // Function to add an user to the cart
  const addItemToCart = (user) => {
    setCartItems([...cartItems, user]);
  };

  // Function to remove an user from the cart
  const removeItemFromCart = (itemIndex) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(itemIndex, 1);
    setCartItems(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, user) => total + user.price, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((user, index) => (
              <li key={index}>
                {user.name} - ${user.price}
                <button onClick={() => removeItemFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
