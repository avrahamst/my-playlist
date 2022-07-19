import React from "react";
import Login from "../../pages/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import Main from "../../pages/Main/Main";
import Register from "../../pages/Register/Register";

export default function Layout() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <Route path="/*" element={<Main />} />
        )}
      </Routes>
    </div>
  );
}
