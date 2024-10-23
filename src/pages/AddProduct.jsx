import React, { useContext, useState } from "react";
import ProductInput from "../component/ProductInput";
import categories from "../utils/app";
import { db } from "../utils/firbase";
import { context } from "../context/AuthContext";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FaSpinner } from "react-icons/fa";
function AddProduct() {
  let { user, setUser } = useContext(context);
  // console.log(user.uid);

  let [loading, setLoading] = useState(false);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState("");
  let [location, setLocation] = useState("");
  let [catageory, setCatageory] = useState("");
  let navigate = useNavigate();
  let handleAddProduct = async () => {
    setLoading(true);
    let docRef = collection(db, "products");
    console.log(docRef);

    let setProductObj = {
      title,
      description,
      price,
      image,
      location,
      catageory,
      uid: user.uid,
      createdAt: serverTimestamp(),
      createdBy: user.email,
    };
    let setData = await addDoc(docRef, setProductObj)
      .then((data) => {
        setLoading(false);
        toast.success("Product added successfully successfully");
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
    console.log(setData);

    setLoading(false);
  };
  return (
    <>
      <Box className=" w-full flex flex-col h-full pt-5 pb-5">
        <form
          data-aos="zoom-in"
          onSubmit={handleAddProduct}
          className="w-full  flex flex-col gap-7 justify-center"
        >
          <ProductInput
            productTitle={"Title"}
            value={title}
            type={"text"}
            setValue={setTitle}
          />
          <ProductInput
            productTitle={"Product Description"}
            type={"text"}
            value={description}
            setValue={setDescription}
          />
          <ProductInput
            productTitle={"Product Price"}
            type={"number"}
            value={price}
            setValue={setPrice}
          />
          <ProductInput
            productTitle={"Product Image"}
            type={"text"}
            value={image}
            setValue={setImage}
          />
          <ProductInput
            productTitle={"Product Location"}
            type={"text"}
            value={location}
            setValue={setLocation}
          />
          {/* <div>
              <select
                onChange={(e) => {
                  setCatageory(e.target.value);
                }}
                className="w-full h-10 border-2 border-blue-400 rounded-md"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div> */}
          {/* new  */}
          {/* <div> */}
          <Box>
            <FormControl className="w-full h-10" sx={{ m: 0, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Catageory
              </InputLabel>
              <Select
                // labelId="demo-simple-select-helper-label"
                labelId="demo-simple-select-label"
                id="demo-simple-select-helper"
                // value={"skskks"}
                label="Catageory"
                onChange={(e) => {
                  setCatageory(e.target.value);
                }}
              >
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category.slug}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          {/* </div> */}
          <Button
            sx={{ background: "linear-gradient(to right, #3f51b5, #00bcd4)" }}
            variant="contained"
            className="w-full h-10  rounded-md text-xl text-white"
            type="submit"
          >
            {loading ? <FaSpinner /> : "Submit"}
          </Button>
        </form>
      </Box>
    </>
  );
}

export default AddProduct;
