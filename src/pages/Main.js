import { React, useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "../componnt/Header";
import Body from "../componnt/Body";
import Footer from "../componnt/Footer";

export default function Main() {
	const shazam = axios.create({
		baseURL: "https://spotify23.p.rapidapi.com",
	});
	const [name, setName] = useState("");
	const [songs, setSongs] = useState([]);
	const [selectedSong, setSelectedSong] = useState(null);

	useEffect(() => {
		//"kiss the rain"
		async function getData() {
			const response = await shazam.get("search", {
				params: {
					q: name,
					type: "multi",
					offset: "0",
					limit: "10",
					numberOfTopResults: "5",
				},
				headers: {
					"X-RapidAPI-Key":
						"e8513797bcmshc70bff1aa59052dp148c5bjsn35870fe3f190",
					"X-RapidAPI-Host": "spotify23.p.rapidapi.com",
				},
			});
			console.log(response.data);
			setSelectedSong(response.data);
		}
		getData();
	}, [name]);

	return (
		<div>
			<Header setName={setName} />
			<Body songs={selectedSong} />
			<Footer selectedSong={selectedSong} />
		</div>
	);
}
