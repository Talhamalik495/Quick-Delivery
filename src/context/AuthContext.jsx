import { onAuthStateChanged } from "firebase/auth";
import image1 from "../assets/QuickDelivery(logo).png";
import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../utils/firbase";
import { getDoc, doc } from "firebase/firestore";
import { BarLoader, FadeLoader } from "react-spinners";
import { useLocation } from "react-router-dom";

export const context = createContext();
function AuthContext({ children }) {
  let [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });
  let [loading, setLoading] = useState(true);

  let stateChanged = async (users) => {
    if (users) {
      let docRef = doc(db, "users", users.uid);
      let userInfo = await getDoc(docRef);
      console.log(user);
      setUser({
        isLogin: true,
        ...userInfo?.data(),
      });
      setLoading(false);
    } else {
      setLoading(false);
      setUser({
        isLogin: false,
        userInfo: {},
      });
    }
  };
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, stateChanged);
    return unsubscribe;
  }, []);
  console.log(user);

  return (
    <context.Provider value={{ user, setUser }}>
      {loading ? (
        <div className="h-[600px]  w-[100%] flex items-center text-[#5501b9] text-3xl flex-col justify-center">
          <img src={image1} width={150} height={150} />
          <p className="text-blue-400">Ecommerce</p>
          <BarLoader
            className=" w-100 h-100 mt-3"
            loading={loading}
            color="black"
          />
        </div>
      ) : (
        children
      )}
    </context.Provider>
  );
}
export default AuthContext;
