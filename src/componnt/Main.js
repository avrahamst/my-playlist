import { React, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Header from "./Header";

export default function Main() {
	const { user } = useContext(UserContext);
	const [pplay, usePplay] = useState();

	return (
		<div>
			<Header />
		</div>
	);
}
