import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Button, Col } from "react-bootstrap";
import validateInfo from "./validateInfo";
import { useState } from "react";
import logo from "../../assets/logo3.jpg";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const [error, setErrors] = useState({});
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateInfo(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      axios
        .post("http://localhost:3001/users/register", values)
        .then((response) => {
          console.log(response.data);
          localStorage.token = response.data;
          navigate("/main");
        })
        .catch((err) => {
          console.log(err.response);
          setErrors({ errFatc: err.response.data });
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  return (
    <div className=" container-fluid  ">
      <div className="row" dir="rtl">
        <div className="col-md-3 col-sm-12 col-xs-12"></div>

        <div className="col-md-6 col-sm-8 col-xs-8">
          <Form
            className=" bg-light rounded  border border-dark mb-2  mt-2 reg"
            noValidate
            onSubmit={handleSubmit}
          >
            <Row>
              <img
                src={logo}
                alt="logo"
                className="register-logo rounded-circle "
              />
            </Row>
            <Row>
              <h1 className="text-center">טופס הרשמה</h1>
              {error.errFatc && (
                <p className="text-center text-danger rounded w-25 ">
                  {error.errFatc}
                </p>
              )}
            </Row>
            <Row>
              <Form.Group as={Col} md="6" lg="6" sm="12">
                <Form.Label>שם פרטי </Form.Label>
                <Form.Control
                  required
                  placeholder="שם פרטי*"
                  className="form-control text-right"
                  name="firstName"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={error.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {error.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" lg="6" sm="12">
                <Form.Label> שם משפחה </Form.Label>
                <Form.Control
                  placeholder="שם משפחה*"
                  className="form-control text-right"
                  name="lastName"
                  value={values.lastName}
                  //   value={values.lastName}
                  onChange={handleChange}
                  isInvalid={error.lastName}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {error.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="6" lg="6" sm="12">
                <Form.Label> טלפון </Form.Label>
                <Form.Control
                  placeholder="מספר נייד*"
                  className="form-control text-right"
                  value={values.phone}
                  onChange={handleChange}
                  required
                  name="phone"
                  isInvalid={error.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {error.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" lg="6" sm="12">
                <Form.Label> מייל </Form.Label>
                <Form.Control
                  placeholder="מייל*"
                  type="email"
                  className="form-control text-right"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={error.email}
                  required
                  name="email"
                />
                <Form.Control.Feedback type="invalid">
                  {error.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="6" lg="6" sm="12">
                <Form.Label> סיסמה </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="סיסמה*"
                  className="form-control text-right"
                  value={values.password}
                  onChange={handleChange}
                  required
                  name="password"
                  autoComplete="off"
                  isInvalid={error.password}
                />
                <Form.Control.Feedback type="invalid">
                  {error.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" lg="6" sm="12">
                <Form.Label> אימות סיסמה </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="אישור סיסמה*"
                  value={values.password2}
                  onChange={handleChange}
                  className="form-control text-right"
                  required
                  name="password2"
                  autoComplete="off"
                  isInvalid={error.password2}
                />
                <Form.Control.Feedback type="invalid">
                  {error.password2}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="4" lg="4" sm="12">
                <Button
                  size="lg"
                  variant="dark"
                  className=" col-12 mb-3 mt-3"
                  onClick={(e) => {
                    navigate("/login");
                    e.preventDefault();
                  }}
                >
                  כניסה
                </Button>
              </Form.Group>
              <div className="col-2"></div>
              <Form.Group as={Col} md="6" lg="6" sm="12">
                <Button
                  size="lg"
                  type="submit"
                  // disabled={loading}
                  variant="primary"
                  className=" col-12 mb-3 mt-3"
                >
                  שלח
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}
