import { Link, useNavigate } from "react-router-dom";

import { useContext, Context, useState } from "react";
import { UserContext } from "../context/UserContext";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import logo from "../componnt/logo3.jpg";

export default function Login() {
	const navigate = useNavigate();

	// const { userName, setUserName } = useContext(UserContext);
	const { user, setUser } = useContext(UserContext);
	let [flag, setflag] = useState(false);
	function handleSubmit() {}
	return (
		<div className="container-fluid bg-primary " dir="rtl">
			<div className="row">
				<div className="col-md-4 col-sm-4 col-xs-12 "></div>
				<div className="col-md-4 col-sm-4 col-xs-12 ">
					<form
						className="from-container  log-con bg-light rounded "
						onSubmit={handleSubmit}
					>
						<img
							src={logo}
							alt="logo"
							className="login-logo rounded-circle text-center"
						/>
						<h1 className="text-center">כניסה</h1>

						<div className="form-group">
							<h5 className="text-right">שם משתמש</h5>
							<input
								placeholder="Example@Example.com"
								className="form-control  text-right"
								// ref={emailRef}
							></input>
						</div>
						<div className="form-group">
							<h5 className=" text-right">סיסמה</h5>
							<input
								type="password"
								placeholder="הכנס סיסמה"
								className="form-control text-right"
								autoComplete="on"
								// ref={passwordRef}
							></input>
						</div>
						<Button
							variant="dark"
							type="submit"
							block="true"
							className="log-btn col-12"
						>
							התחברות
						</Button>

						<Button
							variant="dark"
							className="log-btn col-12"
							onClick={(e) => {
								navigate("/Register");
								e.preventDefault();
							}}
						>
							הרשמה
						</Button>
						<div className="w-100 text-center mt-3">
							<Link to="/forgot-password">שכחתי סיסמה</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
