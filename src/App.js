<<<<<<< HEAD
// import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./componnt/Layout";
// import { Context } from "react";
import React, { useState } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState({ name: "avi", password: "123" });
  let a = "dddddddd";
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout />
    </UserContext.Provider>
  );
=======
import logo from "./logo.svg";
import "./App.css";

function App() {
	return <div className="App"></div>;
>>>>>>> 22789fb90a170f0db56bdc0680779b76a4c6f1b9
}

export default App;
