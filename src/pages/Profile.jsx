import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/AuthContext";
import { FaUserEdit } from "react-icons/fa";
import { auth, db, storage } from "../utils/firbase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getDocs } from "firebase/firestore";
import Aos from "aos";
import "aos/dist/aos.css";
import { MoonLoader } from "react-spinners";
import { Alert, Avatar, CircularProgress, TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
function Profile() {
  let { user, setUser } = useContext(context);
  console.log(user);

  let [name, setName] = useState(user?.name || "");
  let [email, setEmail] = useState(user?.email || "");
  let [description, setDescription] = useState(user?.description || "");
  let [photo, setPhoto] = useState(null || "");
  let [showPhoto, showSetPhoto] = useState(user?.avatar);

  let [loading, setLoading] = useState(false);

  if (!user) {
    setLoading(true);
  }
  let updatProfile = async () => {
    try {
      // Image Upload
      // Stroage Refrence
      setLoading(true);
      //     // Upload Image
      // //   Download Url
      let storageRef = ref(storage, `users/${user.uid}`);
      // Upload Image
      let imagUpload = await uploadBytes(storageRef, photo);
      //   Download Url
      let getUrl = await getDownloadURL(storageRef);
      let updateObj = {
        name,
        description,
        avatar: getUrl,
      };

      let docRef = doc(db, "users", user.uid);
      let docUpdate = await updateDoc(docRef, updateObj);
      let getData = await getDoc(docRef);
      showSetPhoto(photo);
      toast.success("update profile");

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.name);
    }
  };
  let navigate = useNavigate();
  let handleLogout = async () => {
    let singout = await signOut(auth);
    setLoading(true);
    let docRef = doc(db, "users", user?.uid);

    let docUpdate = await updateDoc(docRef, {
      isActive: false,
      isLogin: false,
    });
    setLoading(false);
    console.log("logout chal gya ha");

    navigate("/");
  };
  console.log(user);

  return (
    <div className="w-full h-full flex justify-center items-center mt-20 my-20">
      <div
        data-aos="zoom-in-up"
        className="h-[700px] w-[33%] bg-[#F1F5F9]   shadow-[0_8px_15px_rgba(0,0,0,0.3)] relative   flex justify-center items-center flex-col gap-5  font- Google px-5"
      >
        <label
          data-aos="zoom-in-up"
          htmlFor="fileinput"
          className="w-[150px] h-[150px] rounded-full relative"
        >
          <Avatar
            className="border-2 bg-white  flex object-cover"
            alt="Remy Sharp"
            src={showPhoto}
            sx={{ width: 136, height: 136 }}
          />
        </label>
        <input
          hidden
          type="file"
          id="fileinput"
          onChange={(e) => {
            setPhoto(e?.target?.files[0]);
          }}
        />

        <div className=" w-[380px] font- Google flex flex-col justify-start items-start gap-4">
          <label className="ml-1" htmlFor="name">
            Name
          </label>
          <TextField
            required
            className="w-full h-10"
            id="name"
            label={"Name"}
            // sx={{""}}
            variant="outlined"
            type={"text"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);

              console.log(e.target.value);
            }}
          />
        </div>
        <div className="w-[380px] flex flex-col font- Google justify-start items-start gap-4">
          <label htmlFor="email" className="ml-1">
            Email
          </label>

          <TextField
            required
            className="w-full h-10"
            id="outlined-basic"
            label={"Email"}
            variant="outlined"
            type={"email"}
            value={email}
            onChange={(e) => {
              setValue(e.target.value);

              console.log(e.target.value);
            }}
          />
        </div>
        <div className="w-[380px] font- Google flex flex-col justify-start items-start gap-4">
          <label className="ml-1" htmlFor="description">
            Description
          </label>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            value={description}
            id="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="w-[380px]">
          <button
            //  type="submit"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong bg-gradient-to-r from-indigo-600 to-cyan-400  w-full"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
            onClick={updatProfile}
          >
            {loading ? (
              <CircularProgress size={25} sx={{ color: "white" }} />
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
        <div className="w-[380px]">
          <button
            type="submit"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong bg-gradient-to-r from-indigo-600 to-cyan-400  w-full "
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
