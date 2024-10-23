import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firbase";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // ES 2015
import { MoonLoader } from "react-spinners";
import ProductInput from "../component/ProductInput";
import { CiSearch } from "react-icons/ci";
import { Button } from "@mui/material";
dayjs.extend(relativeTime);

function DashBoardProduct() {
  let [product, setProduct] = useState([]);
  let [loading, setLoading] = useState(false);
  let [focused, setFocused] = useState(false);
  let [search, setSearch] = useState("");

  useEffect(() => {
    let productDetails = async () => {
      try {
        setLoading(true);
        let productRef = collection(db, "products");
        let getProduct = await getDocs(productRef);

        let productList = getProduct.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProduct(productList);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    productDetails();
  }, []);
  let handleFocus = () => {
    setFocused(true);
  };
  let handleBlur = () => {
    setFocused(false);
  };

  return (
    // <h1>All Product</h1>

    loading ? (
      <div className="w-full h-[400px] flex justify-center pt-10">
        <MoonLoader />
      </div>
    ) : (
      <div className="flex gap-5 flex-col  flex-wrap font-medium font-Roboto">
        <div className=" w-full flex flex-wrap gap-5 justify-center">
          {product.map((product) => (
            <div
              data-aos="zoom-in"
              className="w-[300px]   bg-white   rounded-lg flex flex-col justify-start  gap-5 items-start 
           py-7 hover:shadow-card-shadow"
              key={product?.id}
            >
              <img
                className="w-full h-64 rounded-lg mb-10"
                src={product?.image}
                alt={product?.title}
              />
              <div className="px-2 flex flex-col gap-3 justify-start items-start">
                <h1 className="text-lg font-bold">{product?.title}</h1>
                <div className=" w-full flex justify-between gap-24 ">
                  <h3 className=" text-xl">{`Price: ${product?.price}`}</h3>
                  <h3>
                    <del className="text-red-600  text-lg font-bold">5%off</del>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default DashBoardProduct;
