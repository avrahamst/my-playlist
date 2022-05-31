import { Link } from "react-router-dom";
import { useContext, Context, useState } from "react";
import { UserContext } from "../context/UserContext";
import Header from "./Header";

export default function Login() {
  // const { userName, setUserName } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  let [flag, setflag] = useState(false);
  let testName = "",
    testPassword = "";
  // flag = false;
  return (
    <div>
      <input
        name="userName"
        placeholder="userName"
        onChange={(e) => {
          testName = e.target.value;
          if (testName == user.name && testPassword == user.password) {
            alert("bnk");
            setflag(true);
          }
        }}
      />
      <input
        name="password"
        placeholder="password"
        onChange={(e) => {
          testPassword = e.target.value;
          if (testName == user.name && testPassword == user.password) {
            setflag(true);
            // alert("bnk");
          }
        }}
      />
      {/* <Link
        to={() => {
          if (user.name === testName) {
            if (user.password === testPassword) {
              // alert("ok");
              return "/main";
            } else {
              // alert("Incorrect password");
            }
          } else {
            // alert("No such user Create a new user");
          }
        }}
      >
        mmm
      </Link> */}
      <br />
      {/* <button
        onClick={() => {
          if (user.name === testName) {
            if (user.password === testPassword) {
              alert("ok");
              flag = true;
            } else {
              alert("Incorrect password");
            }
          } else {
            alert("No such user Create a new user");
          }
        }}
      >
        Login
      </button> */}
      <Link to="/NewUser">new user</Link>
      <br />

      <Link to={flag ? "/main" : "/"}>main</Link>
    </div>
  );
}
