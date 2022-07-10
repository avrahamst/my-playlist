import { Link, Route, Routes } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./Header.css";
import { useState } from "react";

export default function Header(props) {
	const [text, setText] = useState("");
	return (
		<div>
			<div className="container">
				<div className="row height d-flex justify-content-center ">
					<div className="col-md-6">
						<div className="form">
							<i className="fa fa-search"></i>
							<input
								type="text"
								className="form-control form-input"
								placeholder="Search anything..."
								onChange={(v) => {
									setText(v.target.value);
								}}
							/>

							<span className="left-pan">
								<BsSearch
									onClick={() => {
										props.setName(text);
										console.log(text);
									}}
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
