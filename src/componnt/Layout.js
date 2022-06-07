import React from "react";
import Login from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import NewUser from "./NewUser";
import Main from "./Main";
import Register from "../pages/Register";

export default function Layout() {
	return (
		<div>
			{/* <Login /> */}
			<Routes>
				{/* <Route path="/" element /> */}
				<Route path="/" element={<Login />} />
				<Route path="/Register" element={<Register />} />
				<Route path="/NewUser" element={<NewUser />} />

				<Route path="/main" element={<Main />} />
			</Routes>
		</div>
	);
}
