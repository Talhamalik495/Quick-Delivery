import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../utils/firbase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { BarLoader, BeatLoader, MoonLoader } from "react-spinners";
import { doc, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useContext } from "react";
import { context } from "../context/AuthContext";
import { FaSpinner } from "react-icons/fa";
import { CircularProgress } from "@mui/material";
const provider = new GoogleAuthProvider();
function SingUp() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [loading, setLoading] = useState(false);
  let { user, setUser } = useContext(context);
  let navigate = useNavigate();
  useEffect(() => {
    if (user?.isLogin) {
      navigate("/");
    }
  }, [user]);
  // let googleHandler = async () => {
  //   try {
  //     setLoading(true);
  //     let google = await signInWithPopup(auth, provider);
  //     console.log(google);

  //     setLoading(false);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //     toast.error(error.message);
  //   }
  // };
  let formHandle = async () => {
    if (!name || !email || !password) {
      toast.error("please enter value");
    }

    try {
      setLoading(true);
      let newUser = await createUserWithEmailAndPassword(auth, email, password);
      let docRef = doc(db, "users", newUser?.user?.uid);
      let set = await setDoc(docRef, {
        name,
        email,
        phoneNumber,
        uid: newUser?.user?.uid,
        isActive: true,
      });
      setLoading(false);
      navigate("/");
      toast.success("Sinup Succsesfully");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="h-[100%] w-[100%] bg-[#f3f4f6] flex gap-5 justify-center pb-20">
      <div className=" bg-[#f3f4f6] flex gap-5 justify-center  pt-3">
        <div
          data-aos="fade-right"
          className="w-[45%]  bg-white px-16 py-10  flex flex-col gap-5 rounded-3xl"
        >
          <h1 className="text-blue-500 text-4xl font-bold">
            Join Online Shop Today!
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
          className="w-[45%] bg-white py-16 px-10  flex flex-col gap-2 rounded-3xl"
        >
          <div className="flex justify-center">
            <h1 className="text-2xl mb-10">Create an Account</h1>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formHandle();
            }}
          >
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-black">
                Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
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
              <label
                htmlFor="password"
                className="leading-7 text-sm text-black"
              >
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
            <div className="relative">
              <label htmlFor="number" className="leading-7 text-sm text-black">
                PhoneNumber
              </label>
              <input
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                value={phoneNumber}
                type="number"
                id="number"
                name="number"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <button
                className="mx-auto text-white bg-gradient-to-r from-indigo-600 to-cyan-400 border-0 py-2 px-8 focus:outline-none w-full flex justify-center rounded-lg"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={25} sx={{ color: "white" }} />
                ) : (
                  "Singup"
                )}
              </button>
            </div>
          </form>
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

export default SingUp;
