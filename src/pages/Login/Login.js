import { Link, useNavigate } from "react-router-dom";

import { useRef } from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import logo from "../../assets/logo3.jpg";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const [error, setErrors] = useState({});
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  let emailRef = useRef();
  let passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    await axios
      .post("http://localhost:3001/users/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.token = response.data;
        axios.get("/users/user", {
          headers: {
            Authorization: `bearer ${localStorage.token}`,
          },
        });
        setUser(response);
        //navigate("/main");
      })
      .catch((err) => {
        console.log(err);
        setErrors({ errFatc: err.response.data });
      });
  };
  return (
    <div className="container-fluid  " dir="rtl">
      <Row>
        <Row className="col-md-4 col-sm-4 col-xs-12 "></Row>
        <Row className="col-md-4 col-sm-4 col-xs-12 ">
          <Form
            className="from-container  log-con bg-light rounded "
            onSubmit={handleSubmit}
          >
            <Row>
              <img
                src={logo}
                alt="logo"
                className="login-logo rounded-circle text-center"
              />
            </Row>
            <Row>
              <h1 className="text-center">כניסה</h1>
              {error.errFatc && (
                <p className="text-center text-danger rounded  col-sm-w-100 col-xm-w-100   ">
                  {error.errFatc}
                </p>
              )}
            </Row>
            <Row>
              <Form.Group as={Col} md="12" lg="12" sm="12">
                <Form.Label>שם משתמש </Form.Label>
                <Form.Control
                  placeholder="Example@Example.com"
                  className="form-control  text-right"
                  ref={emailRef}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="12" lg="12" sm="12">
                <Form.Label>סיסמה </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="הכנס סיסמה"
                  className="form-control text-right"
                  autoComplete="on"
                  ref={passwordRef}
                />
              </Form.Group>
            </Row>
            <Row>
              <Button
                variant="dark"
                type="submit"
                block="true"
                className="log-btn col-12"
              >
                התחברות
              </Button>
            </Row>
            <Row>
              <Button
                variant="dark"
                className="log-btn col-12"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/Register");
                }}
              >
                הרשמה
              </Button>
            </Row>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">שכחתי סיסמה</Link>
            </div>
          </Form>
        </Row>
      </Row>
    </div>
  );
}
