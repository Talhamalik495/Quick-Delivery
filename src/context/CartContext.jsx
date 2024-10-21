import { collection, getDocs } from "firebase/firestore";
import React, { createContext } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../utils/firbase";

export const CartContext = createContext();
function CartContextProvider({ children }) {
  let [cartItem, setCartItem] = useState([]);
  let addToCart = (item) => {
    let arr = cartItem;
    // Itme add nhe ha to add kardo
    // Agar item add ha to os ke quntity brhao
    // chek if item exsist
    let itemIndex = cartItem.findIndex((data) => {
      return data.id == item.id;
    });
    console.log(itemIndex);

    if (itemIndex == -1) {
      arr.push({ ...item, quntity: 1 });
    } else {
      arr[itemIndex].quntity++;
    }
    setCartItem([...arr]);
  };

  let removeItem = (id) => {
    const arr = cartItem;
    const itemIndex = cartItem.findIndex((data) => {
      return data.id == id;
    });
    arr.splice(itemIndex, 1);
    setCartItem([...arr]);
  };
  let isItemAdded = (id) => {
    const arr = cartItem;
    const itemIndex = cartItem.findIndex((data) => {
      return data.id == id;
    });
    if (itemIndex == -1) {
      return null;
    } else {
      return arr[itemIndex];
    }
  };
  return (
    <CartContext.Provider
      value={{ cartItem, addToCart, removeItem, isItemAdded }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
