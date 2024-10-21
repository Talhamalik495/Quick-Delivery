import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firbase";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // ES 2015
import { MoonLoader } from "react-spinners";
import ProductInput from "../component/ProductInput";
import { CiSearch } from "react-icons/ci";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { CartContext } from "../context/CartContext";
dayjs.extend(relativeTime);

function AllProduct() {
  let [product, setProduct] = useState([]);
  let [orignalProduct, setOrignalProduct] = useState([]);
  let [loading, setLoading] = useState(false);
  let [focused, setFocused] = useState(false);
  let [search, setSearch] = useState("");
  let { cartItem, addToCart, removeItem, isItemAdded } =
    useContext(CartContext);

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
        setOrignalProduct(productList);
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
  let filter = product.filter((data) => {
    return data.title.toLowerCase().includes(search);
    console.log(data);
  });
  console.log(filter);
  let catageoryFilter = (catageory) => {
    console.log(catageory);

    let updateFilter = orignalProduct.filter((data) => {
      console.log(data);

      return data.catageory === catageory;
    });
    setProduct(updateFilter);
  };
  return (
    // <h1>All Product</h1>

    loading ? (
      <div className="w-full h-[400px] flex justify-center pt-10 items-center">
        <MoonLoader />
      </div>
    ) : (
      <div className="flex gap-5 flex-col  flex-wrap font-medium font-Roboto">
        <div className=" w-96 relative ml-3 mr-3 mt-5 ">
          <input
            placeholder="Search product"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            type="text"
            name="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full bg-gray-100 bg-opacity-50 border border-blue-500 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-full"
          />
          {focused == false && (
            <CiSearch className="absolute top-8 left-[90%] text-3xl text-blue-500" />
          ) ? (
            <CiSearch className="absolute top-1 left-[90%] text-2xl size-8 text-blue-500" />
          ) : (
            ""
          )}
        </div>
        <div className="flex gap-2   w-full  flex-col px-2">
          <div className=" w-full flex gap-5">
            <Button
              onClick={() => {
                catageoryFilter("mens-shirts");
              }}
              variant="contained"
            >
              Mens Shirts
            </Button>
            <Button
              onClick={() => {
                catageoryFilter("mens-shoes");
              }}
              variant="contained"
            >
              Mens Shoes
            </Button>
            <Button
              onClick={() => {
                catageoryFilter("mens-watches");
              }}
              variant="contained"
            >
              Mens Watches
            </Button>

            <Button
              onClick={() => {
                catageoryFilter("motorcycle");
              }}
              variant="contained"
            >
              MotorCycle
            </Button>

            <Button
              onClick={() => {
                catageoryFilter("beauty");
              }}
              variant="contained"
            >
              Beauty
            </Button>
            <Button
              onClick={() => {
                catageoryFilter("furniture");
              }}
              variant="contained"
            >
              Furniture
            </Button>
            <Button
              onClick={() => {
                catageoryFilter("groceries");
              }}
              variant="contained"
            >
              Groceries
            </Button>
            <Button
              onClick={() => {
                catageoryFilter("laptops");
              }}
              variant="contained"
            >
              Laptops
            </Button>
            <Button
              // sx={{ width: "40px" }}
              onClick={() => {
                catageoryFilter("mobile-accessories");
              }}
              variant="contained"
            >
              Mobile Accessories
            </Button>
          </div>
          <div className=" w-full flex gap-2">
            <Button
              onClick={() => {
                catageoryFilter("smartphones");
              }}
              variant="contained"
            >
              Smart Phones
            </Button>
            <Button
              onClick={() => {
                catageoryFilter("sports-accessories");
              }}
              variant="contained"
            >
              Sports Accessories
            </Button>
            <Button
              onClick={() => {
                catageoryFilter("tablets");
              }}
              variant="contained"
            >
              Tablets
            </Button>
            <Button
              onClick={() => {
                catageoryFilter("womens-bags");
              }}
              variant="contained"
            >
              Womens Bags
            </Button>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  catageoryFilter("womens-dresses");
                }}
                variant="contained"
              >
                Womens Dresses
              </Button>
              <Button
                onClick={() => {
                  catageoryFilter("womens-jewellery");
                }}
                variant="contained"
              >
                Womens Jewellery
              </Button>
              <Button
                onClick={() => {
                  catageoryFilter("womens-shoes");
                }}
                variant="contained"
              >
                Womens Shoes
              </Button>
              <Button
                onClick={() => {
                  catageoryFilter("womens-watches");
                }}
                variant="contained"
              >
                Womens Watches
              </Button>
            </div>
          </div>
          <Button
            onClick={() => {
              setProduct(orignalProduct);
            }}
            variant="contained"
          >
            Clear Filter
          </Button>
        </div>
        <div className="flex flex-wrap gap-3 ml-3 mr-3 ">
          {/* <div className="w-[230px] h-dvh bg-blue-600 rounded-xl">
            <h1>Filter By Catageory</h1>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div> */}
          {filter.map((product) => (
            <div
              data-aos="zoom-in"
              className="w-[250px] 
                bg-[#F1F5F9]   rounded-lg flex flex-col justify-start  gap-5 items-start py-5 
            hover:shadow-2xl shadow-[ #5501b9]"
              key={product?.id}
            >
              <img
                className="w-full h-[200px] rounded-lg"
                src={product?.image}
                alt={product?.title}
              />
              <div className="px-2 flex flex-col gap-3 justify-start items-start">
                <h1 className="text-lg font-bold">{product?.title}</h1>
                <div className="flex justify-between w-full">
                  <h3 className=" text-md">{`Price: ${product?.price}`}</h3>
                  <h3>
                    <del className="text-red-600  text-md font-bold">5%off</del>
                  </h3>
                </div>
                <Button
                  // sx={{
                  //   bgcolor: "#5501b9",
                  // }}
                  className="w-48 h-10  text-white  rounded-lg"
                  variant="contained"
                >
                  <Link to={`${product.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default AllProduct;