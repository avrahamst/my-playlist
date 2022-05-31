import React from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import NewUser from "./NewUser";
import Main from "./Main";

export default function Layout() {
  return (
    <div>
      {/* <Login /> */}
      <Routes>
        {/* <Route path="/" element /> */}
        <Route path="/" element={<Login />} />
        <Route path="/NewUser" element={<NewUser />} />

        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}
