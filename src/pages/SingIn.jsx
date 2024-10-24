import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader, BeatLoader, MoonLoader } from "react-spinners";
import { toast } from "react-toastify";
import { auth, db } from "../utils/firbase";
import { context } from "../context/AuthContext";
import { getDoc } from "firebase/firestore";
import { FaSpinner } from "react-icons/fa";
import { CircularProgress } from "@mui/material";
function SingIn() {
  let { user, setUser } = useContext(context);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let signInHandle = async () => {
    try {
      if (!email && password) {
        toast.error("prlese fill all the field");
        return;
      }
      if (!user) {
        console.log("user not found");
        return null;
      }
      setLoading(true);
      let singInUser = await signInWithEmailAndPassword(auth, email, password);
      let currentUser = singInUser.user;
      console.log(currentUser.uid);

      if (currentUser.uid) {
        let docRef = doc(db, "users", currentUser.uid);
        let updateData = await updateDoc(docRef, {
          isLogin: true,
          isActive: true,
        });
        let getData = await getDoc(docRef);
        // setUser(getData?.data());
      }

      navigate("/");
      setLoading(false);
      toast.success("Login Succsesfully");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className=" h-[100%] w-[100%] bg-[rgb(243,244,246)] flex gap-5 justify-center items-center pb-20 pt-10 max-lg:flex-col">
        <div
          data-aos="fade-right"
          className="w-[45%]  bg-white py-16 px-10  flex justify-center items-center flex-col gap-5 rounded-3xl max-lg:w-[90%] max-lg:px-12"
        >
          <h1 className="text-blue-500 text-4xl font-bold">
            Welcome to Online Shop!
          </h1>
          <p className="text-lg">
            Join our community at Online Shop! Gain access to the latest
            products and exclusive offers. By signing up, you’ll enjoy special
            discounts that enhance your shopping experience. Our goal is to
            provide you with a safe and convenient shopping environment. Sign up
            today and explore a new world of shopping!"
          </p>
          <ul>
            <li>
              Wide Range of Products: Access thousands of products across
              various categories to find exactly what you need.
            </li>
            <li>
              Exclusive Discounts: Enjoy special discounts and promotions
              available only to registered members.
            </li>
            <li>
              Secure Shopping Experience: Shop with confidence knowing your
              personal information is protected with our secure payment options.
            </li>
            <li>
              24/7 Customer Support: Get assistance anytime with our dedicated
              customer support team ready to help you with any queries.
            </li>
          </ul>
        </div>

        {/* form  */}
        <div
          data-aos="fade-left"
          className="w-[45%] bg-white py-16 px-10  flex flex-col gap-2 justify-center  rounded-3xl max-lg:w-[90%]"
        >
          <div className="flex justify-center text-2xl mb-10">
            <h1 className="text-3xl">Login in to Online Shop</h1>
          </div>
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="leading-7 text-sm text-black">
              password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              id="password"
              name="password"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="p-2 w-full">
            <button
              className="mx-auto text-white bg-gradient-to-r from-indigo-600 to-cyan-400 border-0 py-2 px-8 focus:outline-none rounded-lg w-full flex justify-center "
              onClick={signInHandle}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={25} sx={{ color: "white" }} />
              ) : (
                "SignIn"
              )}
            </button>
          </div>
          {/* <div className="p-2 w-full">
          <button
            className="flex mx-auto text-white bg-black   py-2 px-8 border-black-50 border-2 rounded-lg outline-none border-transparent text-lg"
            onClick={googleHandler}
          >
            <FcGoogle className=" text-3xl mr-2" />
            Sign in with Google
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default SingIn;
