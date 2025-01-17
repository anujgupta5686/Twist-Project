// import axios from "axios";
import React from "react";
import { GiHummingbird } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
// import { BASE_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
// import { removeUser } from "../utils/userSlice";
const Navbar = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("User Data::", user);
  // const logoutHandler = async () => {
  //   try {
  //     const response = await axios.post(BASE_URL + "/api/v1/auth/logout", {
  //       withCredentials: true,
  //     });
  //     console.log("Res::", response);
  //     dispatch(removeUser());
  //   } catch (err) {
  //     console.log("Error", err);
  //     // if (err?.response?.status === 401) {
  //     //   // toast.error(err?.response?.data?.message);
  //     //   // navigate("/login");
  //     // } else {
  //     //   toast.error("Something went wrong");
  //     //   // We can create something went wrong error page for this type of error.
  //     //   // navigate("/login");
  //     // }
  //   }
  // };
  return (
    <>
      <div className="navbar bg-base-300 shadow-md px-5">
        <Link to={"/"} className="flex-1">
          <span className=" flex items-center justify-center gap-2 text-xl p-2">
            <GiHummingbird className="inline-block text-3xl text-pink-400" />
            Twist
          </span>
        </Link>
        <div className="flex-none gap-2">
          {user && (
            <div className="dropdown dropdown-end">
              <div className="flex flex-row items-center gap-2">
                <p className="font-serif text-md text-zinc-400">
                  {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-sky-500"> */}
                  <span className="text-sky-500">Welcome,</span>{" "}
                  {user && user?.firstName + " " + user?.lastName}
                </p>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user && user.photoUrl
                          ? user.photoUrl
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/profile"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
