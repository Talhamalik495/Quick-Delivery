import { Link } from "react-router-dom";
import image1 from "../assets/QuickDelivery(logo).png";
import React, { useContext } from "react";
import AuthContext, { context } from "../context/AuthContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Badge } from "antd";
import { LiaUserSolid } from "react-icons/lia";
import { CartContext } from "../context/CartContext";
import { themContextCreate } from "../context/ThemContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiDark, CiLight } from "react-icons/ci";
{
  /* <MdOutlineDarkMode /> */
}
function Header() {
  let { user, setUser } = useContext(context);
  let [index, setIndex] = useState(0);
  let [show, setShow] = useState(false);
  let { cartItem } = useContext(CartContext);
  let { theme, togleMode } = useContext(themContextCreate);
  console.log(user);

  return (
    <header className="bg-white shadow-lg font-Lato text-gray-600 body-font h-20">
      <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center  h-20">
        <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
          <img className="w-28 h-20" src={image1} alt="" />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
          <Link to={"/"} className="font-Roboto mr-5 text-black text-[18px]">
            Explore
          </Link>
          <Link
            to={"/about"}
            className="font-Roboto mr-5 text-black text-[18px]"
          >
            About
          </Link>
          <Link
            to={"/products"}
            className="font-Roboto mr-5 text-black text-[18px]"
          >
            Products
          </Link>
          {user?.isLogin ? (
            <Link
              to={"/profile"}
              className=" font-Roboto mr-5 text-[18px] text-black"
            >
              Profile
            </Link>
          ) : (
            <div>
              <Link
                to={"/singup"}
                className="font-Roboto text-black text-[18px] py-2 mr-5"
              >
                Singup
              </Link>

              <Link
                className="font-Roboto text-black text-[18px] py-2 mr-5"
                to={"/singin"}
              >
                Sigin
              </Link>
            </div>
          )}
          <Link className="font-Roboto relative text-[18px]" to={"/itemCart"}>
            <Badge count={cartItem.length}>
              <AiOutlineShoppingCart className="w-8 h-8 text-black" />
            </Badge>
          </Link>
          {user.rolle === "admin" ? (
            <Link className="font-Roboto mx-5" to={"/dashboard"}>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(to right, #3f51b5, #00bcd4)",
                }}
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            ""
          )}
          {/* <button className="ml-3 mb-2" onClick={() => togleMode()}>
            {theme == "light" ? (
              <CiDark className="size-7" />
            ) : (
              <CiLight className="size-7" />
            )}
          </button> */}
        </nav>
      </div>
    </header>
  );
}
export default Header;
