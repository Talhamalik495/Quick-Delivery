import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";

function ItemCart() {
  // let param = useParams();
  let { cartItem } = useContext(CartContext);
  let [loading, setLoading] = useState(false);
  console.log(cartItem);
  return (
    <div className="w-full  flex justify-center items-center flex-col gap-5 my-5">
      <div>
        <h1 className=" text-3xl font-bold mb-3 text-blue-500 ">
          Your Shoping Cart
        </h1>
      </div>
      <div className=" container mx-auto shadow-card-shadow w-full bg-white py-10 px-10 rounded-lg flex flex-col gap-5">
        {cartItem.map((data, index) => {
          return (
            <div
              key={index}
              className="w-full h-36 border-2 border-[0,0,0,0.5] flex gap-5 items-center rounded-lg px-5"
            >
              <img className="w-28 h-28" src={data.image} alt="" />
              <div className="flex flex-col gap-2">
                <h1>{data.title}</h1>
                <h1>{data.price}</h1>
              </div>
            </div>
          );
        })}
        <div>
          {!cartItem.length == 0 ? (
            <Link to={"/itemcart/order"}>
              <Button>Order</Button>
            </Link>
          ) : (
            "Your Card Item is Empty"
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
