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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import firstimage1 from "../assets/firstimage1.jpeg";
import firstimage from "../assets/firstimage.webp";
import second from "../assets/second.jpg";
import thard from "../assets/thard.jpg";
import four from "../assets/four.jpg";
import quickdelivery from "../assets/quickdeliverylogo.png";

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
      <div className="w-[100%] h-[500px] ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper w-[100%] h-[500px]"
        >
          <SwiperSlide
            style={{
              backgroundImage: `url(${firstimage1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* <img className="w-[100%] h-[500px] " src={firstimage1} alt="" /> */}
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${second})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* <img className="w-[100%] h-[500px] " src={second} alt="" /> */}
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${thard})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* <img className="w-[100%] h-[500px] " src={thard} alt="" /> */}
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: `url(${four})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* <img className="w-[100%] h-[500px] " src={four} alt="four" /> */}
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex flex-wrap  px-3 gap-3 py-5 mb-5">
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
