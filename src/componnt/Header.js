import { Link, Route, Routes } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./Header.css";

export default function Header() {
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
							/>
							<span className="left-pan">
								<BsSearch />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// <Link to="/Login">Login</Link>
// <Routes>
//   <Route path="/" element />
//   <Route path="/Login" element={<Login />} />
//   <Route path="/NewUser" element={<NewUser />} />
//   <Route />
// </Routes>
