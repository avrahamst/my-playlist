import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { UsersContext } from "../context/UserContext";

import { useState, useRef } from "react";
import logo from "../componnt/logo3.jpg";
import "./register.css";

export default function Register() {
  const { users, setUsers } = useContext(UsersContext);
  const navigate = useNavigate();
  function handleSubmit() {}
  let newUser = {
    fName: "",
    lName: "",
    password: "",
    aeg: "",
    phoneNumber: "",
    email: "",
  };
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
                  onChange={(e) => (newUser.fName = e)}
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <h6 className=" text-right">שם משפחה</h6>
                <input
                  placeholder="שם משפחה*"
                  className="form-control text-right"
                  name="lastName"
                  required
                  onChange={(e) => (newUser.lName = e)}
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
                  onChange={(e) => (newUser.age = e)}
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <h6 className=" text-right">טלפון</h6>
                <input
                  placeholder="מספר נייד*"
                  className="form-control text-right"
                  required
                  onChange={(e) => (newUser.phoneNumber = e)}
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
                  onChange={(e) => (newUser.email = e)}
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
                  onChange={(e) => (newUser.password = e)}
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
                  onChange={(e) => {}}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                {" "}
                <Button
                  // disabled={loading}
                  variant="dark"
                  className=" col-12 mb-3 mt-3"
                  onClick={(e) => {
                    setUsers(users.push);
                    navigate("/Main");
                    e.preventDefault();
                  }}
                >
                  כניסה
                </Button>
              </div>
              <div className="col-2"></div>
              <div className="col-6">
                <Button
                  type="submit"
                  // disabled={loading}
                  variant="primary"
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
