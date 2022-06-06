// import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./componnt/Layout";
// import { Context } from "react";
import React, { useState } from "react";
import { UserContext, UsersContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState({ name: "avi", password: "123" });
  const [users, setUsers] = useState([user]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout />
      </UserContext.Provider>
    </UsersContext.Provider>
  );
}

export default App;
