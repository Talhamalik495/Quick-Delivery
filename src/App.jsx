// import { BrowserRouter, Routes, Route } from'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
 
} from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SingUp from "./pages/SingUp";
import SingIn from "./pages/SingIn";
import Footer from "./component/Footer";
import ProductDeatail from "./pages/ProductDeatail";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import { context } from "./context/AuthContext";
import ItemCart from "./pages/ItemCart";
import AddProduct from "./pages/AddProduct";
import AllProduct from "./pages/AllProduct";
import Aos from "aos";

import "aos/dist/aos.css";
import DashBoard from "./pages/DashBoard";
import DashBoards from "./pages/DasBoards";
import Users from "./pages/Users";
import DashBoardProduct from "./pages/DashBoardProduct";
import Dasboards from "./pages/DasBoards";
import Order from "./pages/Order";
function App() {
  useEffect(() => {
    Aos.init({ duration: 500 }); // Optional: Set duration for animations
  }, []);
  let { user, setUser } = useContext(context);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products">
          <Route index element={<AllProduct />} />
          <Route path="/products:id" element={<ProductDeatail />} />
        </Route>
        <Route path="/singup" element={<SingUp />} />
        <Route path="/singin" element={<SingIn />} />
        <Route
          path="/profile"
          element={user?.isLogin ? <Profile /> : <Navigate to={"/singup"} />}
        />
        <Route path="/itemcart">
          <Route index element={<ItemCart />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="dashboards" element={<Dasboards />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="dashboardproduct" element={<DashBoardProduct />} />
          <Route path="dashboardproduct/:id" element={<ProductDeatail />} />
          <Route path="users" element={<Users />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
