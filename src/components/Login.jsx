import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    emailId: "",
    password: "",
  });

  const submitHandler = async () => {
    if (!data.emailId || !data.password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          emailId: data.emailId,
          password: data.password,
        },
        {
          withCredentials: true,
        }
      );
      if (response?.data?.status === true) {
        toast.success(response.data?.message);
      } else {
        toast.error(response.data?.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-[calc(100vh-18%)]">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login Form</h2>
          <p>Please log in to access the application.</p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Email"
            value={data.emailId}
            onChange={(e) =>
              setData((prev) => ({ ...prev, emailId: e.target.value }))
            }
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
            value={data.password}
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <div className="card-actions justify-center">
            <button className="btn btn-primary w-full" onClick={submitHandler}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
