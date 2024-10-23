import { Button } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingBag, FaShoppingBasket } from "react-icons/fa";
import { HiUser } from "react-icons/hi";

function DashBoard() {
  return (
    <div className=" flex  items-start bg-[#F1F5F9]">
      <div className="w-[32%] h-dvh bg-gradient-to-r from-indigo-600 to-cyan-400 text-[#FFFFFF] flex flex-col gap-5 pl-2 pr-2  pt-10 rounded-md ml-1 mt-2 ">
        <Button
          sx={{
            bgcolor: "white",
            gap: "9px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="contained"
          startIcon={<MdHomeFilled className="text-blue-500 size-5" />}
        >
          <Link className="text-blue-500" to={"/dashboard/dashboards"}>
            Dashboard Control
          </Link>
        </Button>
        <Button
          sx={{
            bgcolor: "white",
            gap: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="contained"
          startIcon={<AiFillProduct className="text-blue-500 size-5" />}
        >
          <Link className="text-blue-500" to={"/dashboard/AddProduct"}>
            Add Product Control
          </Link>
        </Button>
        <Button
          sx={{
            bgcolor: "white",
            gap: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="contained"
          startIcon={<FaShoppingBag className="text-blue-500 size-5" />}
        >
          <Link className="text-blue-500" to={"/dashboard/dashboardproduct"}>
            All Products Control
          </Link>
        </Button>
        <Button
          sx={{
            bgcolor: "white",
            gap: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="contained"
          startIcon={<HiUser className="text-blue-500 size-5" />}
        >
          <Link className="text-blue-500" to={"/dashboard/users"}>
            All Users Control
          </Link>
        </Button>
      </div>
      <div className="w-full mx-2 mb-5 mt-2 ">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoard;
