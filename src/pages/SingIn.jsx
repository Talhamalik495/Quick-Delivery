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

  console.log(user.phoneNumber);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let signInHandle = async () => {
    try {
      // if (!email && password) {
      //   toast.error("prlese fill all the field");
      //   return;
      // }
      // if (!user) {
      //   console.log("user not found");
      //   return null;
      // }
      setLoading(true);
      let singInUser = await signInWithEmailAndPassword(auth, email, password);
      let currentUser = singInUser.user;
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
    // <>
    //   <section className="text-gray-600 body-font relative">
    //     <div className="container px-5 py-24 mx-auto">
    //       <div className="w-full h-3 flex justify-center">
    //         <BarLoader loading={loading} color="black" />
    //       </div>
    //       <div className="flex flex-col text-center w-full mb-12">
    //         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
    //           Sing in
    //         </h1>
    //       </div>
    //       <div className="lg:w-1/2 md:w-2/3 mx-auto">
    //         <div className="flex flex-wrap -m-2">
    //           {/* <div className="p-2 w-1/2">
    //             <div className="relative">
    //               <label
    //                 htmlFor="name"
    //                 className="leading-7 text-sm text-black"
    //               >
    //                 Name
    //               </label>
    //               <input
    //                 onChange={(e) => {
    //                   setName(e.target.value);
    //                 }}
    //                 value={name}
    //                 type="text"
    //                 id="name"
    //                 name="name"
    //                 className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-nonetext-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //               />
    //             </div>
    //           </div> */}
    //           <div className="p-2 w-full">
    //             <div className="relative">
    //               <label
    //                 htmlFor="email"
    //                 className="leading-7 text-sm text-black"
    //               >
    //                 Email
    //               </label>
    //               <input
    //                 onChange={(e) => {
    //                   setEmail(e.target.value);
    //                   console.log(e.target.value);
    //                 }}
    //                 value={email}
    //                 type="email"
    //                 id="email"
    //                 name="email"
    //                 className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //               />
    //             </div>
    //           </div>
    //           <div className="p-2 w-full">
    //             <div className="relative">
    //               <label
    //                 htmlFor="password"
    //                 className="leading-7 text-sm text-black"
    //               >
    //                 password
    //               </label>
    //               <input
    //                 onChange={(e) => {
    //                   setPassword(e.target.value);
    //                   console.log(e.target.value);
    //                 }}
    //                 value={password}
    //                 type="password"
    //                 id="password"
    //                 name="password"
    //                 className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //               />
    //             </div>
    //           </div>
    //           <div className="p-2 w-full">
    //             <button
    //               className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none rounded text-lg"
    //               onClick={singInHandle}
    //             >
    //               Singin
    //             </button>
    //           </div>
    //           <div className="p-2 w-full"></div>
    //           <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
    //             <span className="inline-flex">
    //               <a className="text-black">
    //                 <svg
    //                   fill="currentColor"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   className="w-5 h-5"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    //                 </svg>
    //               </a>
    //               <a className="ml-4 text-black">
    //                 <svg
    //                   fill="currentColor"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   className="w-5 h-5"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    //                 </svg>
    //               </a>
    //               <a className="ml-4 text-black">
    //                 <svg
    //                   fill="none"
    //                   stroke="currentColor"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   className="w-5 h-5"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    //                   <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
    //                 </svg>
    //               </a>
    //               <a className="ml-4 text-black">
    //                 <svg
    //                   fill="currentColor"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   className="w-5 h-5"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    //                 </svg>
    //               </a>
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
    // <>
    <div>
      <div className="h-[100%] w-[100%] bg-[#f3f4f6] flex gap-5 justify-center pb-20 pt-10">
        <div
          data-aos="fade-right"
          className="w-[45%] bg-white py-16 px-10  flex flex-col gap-5 rounded-3xl"
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
          className="w-[45%] bg-white py-16 px-10  flex flex-col gap-2 justify-center  rounded-3xl"
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
