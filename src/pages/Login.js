import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { UserContext, UsersContext } from "../context/UserContext";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import logo from "../componnt/logo3.jpg";

// let users = [{ name: "avi", password: "123" }];

export default function Login() {
  const navigate = useNavigate();

  // const { userName, setUserName } = useContext(UserContext);
  const { users, setUsers } = useContext(UsersContext);
  const { user, setUser } = useContext(UserContext);
  let [flag, setflag] = useState(false);
  function handleSubmit() {}
  let testEmail = "";
  let testPassword = "";
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
                onChange={(e) => {
                  testEmail = e.target.value;
                  // console.log(users);
                }}
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
                onChange={(e) => {
                  testPassword = e.target.value;
                }}
                // ref={passwordRef}
              ></input>
            </div>
            <Button
              variant="dark"
              type="submit"
              block="true"
              className="log-btn col-12"
              onClick={(e) => {
                for (let i = 0; i < users.length; i++) {
                  console.log(users[i]);
                  if (users[i].email === testEmail) {
                    if (users[i].password === testPassword) {
                      console.log(user);
                      setUser(users[i]);
                      navigate("/main");
                      e.preventDefault();
                    } else {
                      alert("סיסמה שגויה");
                    }
                  } else {
                    alert("שם משתמש לא קיים");
                  }
                }
              }}
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
