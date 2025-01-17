import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import Footer from "./Footer";
import { addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const fetchUser = async () => {
    // Check if user is already logged in
    if (userData) return;

    try {
      const response = await axios.get(BASE_URL + "/api/v1/profile/view", {
        withCredentials: true,
      });
      console.log("Res::", response);
      dispatch(addUser(response?.data?.user));
    } catch (err) {
      console.log("Error", err);
      if (err?.response?.status === 401) {
        // toast.error(err?.response?.data?.message);
        navigate("/login");
      } else {
        toast.error("Something went wrong");
        // We can create something went wrong error page for this type of error.
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Body;
