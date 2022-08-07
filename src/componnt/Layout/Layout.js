import React from "react";
import Login from "../../pages/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Contact from "../../pages/Contact/Contact";

import Main from "../../pages/Main/Main";
import Register from "../../pages/Register/Register";

export default function Layout() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <Routes>
        {/* {!user ? ( */}
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
        {/* ) : ( */}
        <Route path="/main" element={<Main />} />
        {/* )} */}
      </Routes>
    </div>
  );
}
