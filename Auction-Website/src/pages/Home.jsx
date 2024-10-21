import { collection, getDocs, limit, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../utils/firbase";
import { orderBy } from "firebase/firestore/lite";
import dayjs from "dayjs";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MoonLoader } from "react-spinners";
import ProductInput from "../component/ProductInput";
import { CiSearch } from "react-icons/ci";
import { Button } from "@mui/material";

function Home() {
  let [threeItems, setThreeItmes] = useState([]);
  let [loading, setLoading] = useState(true);
  let param = useParams();

  useEffect(() => {
    let item = async () => {
      try {
        let productRef = collection(db, "products");
        const q = query(productRef, orderBy("createdAt", "desc"), limit(4));
        const docs = await getDocs(q);
        const arr = [];
        let getData = docs.docs.map((data) => {
          arr.push({ ...data.data(), id: data.id });
        });
        console.log(arr);

        let findData = arr.find((data) => {});
        setThreeItmes([...arr]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error.meassage);
        console.log(error);
      }
    };
    item();
  }, []);

  return loading ? (
    <div className="w-full h-[500px] flex justify-center items-center">
      <MoonLoader />
    </div>
  ) : (
    <div className="w-full">
      <div className="w-[100%] h-[500px] flex justify-center items-center flex-col gap-5 bg-blue-500 ">
        <div className="w-full flex justify-center">
          <h1 className="w-full flex  text-white text-6xl font-extrabold  animate-bounce container">
            Welcome to our online shop! Here, you will find everything you need.
          </h1>
        </div>
        <p className="text-2xl text-white">All Your Essentials, In One Place</p>
        <Link to={"/products"}>
          <Button
            style={{
              backgroundColor: "white",
              color: " rgb(59, 130, 246)",
              width: "150px",
              height: "50px",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            Shop Now
          </Button>
        </Link>
      </div>

      <div className="w-full flex flex-wrap  justify-center px-3 gap-5 py-5 mb-5">
        {threeItems.map((item) => (
          <div
            data-aos="zoom-in"
            className="w-[320px] rounded-lg flex flex-col  gap-7 items-start py-8 bg-[#F1F5F9] hover:shadow-2xl shadow-blue-500"
            key={item.id}
          >
            {/* #5501b9 */}
            {/* shadow-2xl shadow-[ #5501b9] */}
            <img
              className="w-full h-80 rounded-lg mb-5"
              src={item?.image}
              alt={item?.title}
            />
            <h3 className="text-2xl font-bold mx-2">{item?.title}</h3>
            <div className="flex justify-between w-full">
              <h3 className="mx-2 text-xl">{`Price: ${item.price}`}</h3>
              <h3>
                <del className="text-red-600 mr-3 text-lg font-bold">5%off</del>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
