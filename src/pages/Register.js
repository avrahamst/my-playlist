import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import logo from "../componnt/logo3.jpg";
import "./Register.css";

export default function Register() {
	function handleSubmit() {}
	return (
		<div className=" container-fluid bg-primary  ">
			<div className="row" dir="rtl">
				<div className="col-md-3 col-sm-12 col-xs-12"></div>

				<div className="col-md-6 col-sm-8 col-xs-8">
					{/* {error && <Alert variant="danger">{error}</Alert>}   */}
					<form
						className=" bg-light rounded  border border-dark mb-2  mt-2 reg"
						onSubmit={handleSubmit}
					>
						<img
							src={logo}
							alt="logo"
							className="register-logo rounded-circle "
						/>
						<h1 className="text-center">טופס הרשמה</h1>

						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12 ">
								<h6 className=" text-right">שם פרטי</h6>
								<input
									placeholder="שם פרטי*"
									className="form-control text-right"
									name="firstName"
									type="text"
									required
								></input>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 ">
								<h6 className=" text-right">שם משפחה</h6>
								<input
									placeholder="שם משפחה*"
									className="form-control text-right"
									name="lastName"
									required
								></input>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12 ">
								<h6 className=" text-right">גיל</h6>
								<input
									type="number"
									placeholder="גיל"
									className="form-control text-right"
									required
									name="age"
								></input>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 ">
								<h6 className=" text-right">טלפון</h6>
								<input
									placeholder="מספר נייד*"
									className="form-control text-right"
									required
								></input>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12 ">
								<h6 className=" text-right">מייל</h6>
								<input
									placeholder="מייל*"
									className="form-control text-right"
									required
								></input>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12 ">
								<h6 className=" text-right"> סיסמה</h6>
								<input
									type="password"
									placeholder="סיסמה*"
									className="form-control text-right"
									required
									name="password"
									autoComplete="off"
								></input>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 ">
								<h6 className=" text-right">אימות סיסמה</h6>
								<input
									type="password"
									placeholder="אישור סיסמה*"
									className="form-control text-right"
									required
									name="password"
									autoComplete="off"
								></input>
							</div>
						</div>
						<div className="row">
							<div className="col-3"></div>
							<div className="col-6">
								<Button
									type="submit"
									// disabled={loading}
									variant="success"
									className=" col-12 mb-3 mt-3"
								>
									שלח
								</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}