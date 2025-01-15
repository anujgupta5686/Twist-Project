import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Body from "./components/Body";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Body />}>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
