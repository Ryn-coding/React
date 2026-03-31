import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './SuperCoin.css';

const SuperCoin = () => {
  const [superCoins, setSuperCoins] = useState(0);
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    if (totalAmount >= 300) {
      setSuperCoins(30);
    } else if (totalAmount >= 200) {
      setSuperCoins(20);
    } else if (totalAmount >= 100) {
      setSuperCoins(10);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);

  return (
    <div className="super-coin-container">
      <h2>Super Coins</h2>
      <p>Total Cart Amount: ${totalAmount}</p>
      <p>You have earned {superCoins} Super Coins.</p>
    </div>
  );
};

export default SuperCoin;
