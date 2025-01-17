import React from "react";
import { GiHummingbird } from "react-icons/gi";
import { useSelector } from "react-redux";
const Navbar = () => {
  const user = useSelector((state) => state.user);
  console.log("User Data::", user);
  return (
    <>
      <div className="navbar bg-base-300 shadow-md px-5">
        <div className="flex-1">
          <span className=" flex items-center justify-center gap-2 text-xl p-2">
            <GiHummingbird className="inline-block text-3xl text-pink-400" />
            Twist
          </span>
        </div>
        <div className="flex-none gap-2">
          {user && (
            <div className="dropdown dropdown-end">
              <div className="flex flex-row items-center gap-2">
                <p className="font-serif text-md text-zinc-400">
                  Welcome, {user && user?.firstName + " " + user?.lastName}
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
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
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
