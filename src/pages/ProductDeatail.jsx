import { collection } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { db } from "../utils/firbase";
import { getDocs } from "firebase/firestore";
import dayjs from "dayjs";
import { MoonLoader } from "react-spinners";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { CartContext } from "../context/CartContext";
import { context } from "../context/AuthContext";

function ProductDeatail() {
  let param = useParams();
  let [productDetail, setProductDetail] = useState([]);
  let { cartItem, addToCart, isItemAdded } = useContext(CartContext);
  let { user, setUser } = useContext(context);
  let Navigate = useNavigate();
  console.log(cartItem);

  let [loading, setLoading] = useState(false);
  let [open, setOpen] = useState(false);
  useEffect(() => {
    let getData = async () => {
      try {
        setLoading(true);
        let productRef = collection(db, "products");
        let getProduct = await getDocs(productRef);
        // console.log(getProduct);

        let productList = getProduct?.docs?.map((doc) => ({
          id: doc?.id,
          ...doc?.data(),
        }));

        console.log(productList);

        setProductDetail([...productList]);
        console.log(productDetail);
        console.log(productDetail);

        let findData = productList?.find((data) => {
          return data?.id == param.id;
        });
        setProductDetail([findData]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, []);

  let handleOpen = () => {
    setOpen(true);
  };
  let handleClose = () => {
    setOpen(false);
  };
  return loading ? (
    <div className="w-full h-full flex justify-center items-center">
      <MoonLoader />
    </div>
  ) : (
    <div className="w-full my-10 flex justify-center items-center flex-col gap-10">
     
      {productDetail?.map((data) => {
        return (
          <div
            key={data.id}
            data-aos="zoom-in"
            className=" h-full w-full flex justify-center gap-5 mt-5 px-40"
          >
            <div className=" w-80 h-[500px]">
              <img
                className="w-full h-[350] rounded-lg "
                src={data?.image}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-5 w-[550px] ">
              <h1>{`Name: ${data?.title}`}</h1>
              <h1>{`Price: ${data?.price}`}</h1>
              <h1>{`Catageory: ${data?.catageory}`}</h1>
              <h1>{`Brand: ${data?.brand}`}</h1>
              <h1>{`Location: ${data?.location}`}</h1>
              <h1>{`CreatedAt: ${dayjs().to(data?.createdAt.toDate())}`}</h1>
              <h1>{`Description: ${data?.description}`}</h1>
              {/* <Button
                // sx={{ bgcolor: "lightblue" }}
                variant="contained"
                onClick={handleOpen}
              >
                Product Bids
              </Button> */}
              <Dialog
                open={open}
                // onClose={handleClose}
                PaperProps={{
                  component: "form",
                  onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const email = formJson.email;
                    console.log(email);
                    handleClose();
                  },
                }}
              >
                <DialogTitle>Product Bids</DialogTitle>
                <DialogContent className="w-[500px]">
                  {/* <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                  </DialogContentText> */}
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="Add Bids"
                    type="number"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">Subscribe</Button>
                </DialogActions>
              </Dialog>
              <Button
                onClick={() => {
                  user.isLogin ? addToCart(data) : Navigate("/singup");
                }}
                variant="contained"
                // sx={{ bgcolor: "#5501b9" }}
              >
                {isItemAdded(data.id)
                  ? `Added (${isItemAdded(data.id).quntity})`
                  : `Add to Card`}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDeatail;
