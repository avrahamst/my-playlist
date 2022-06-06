import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext, UsersContext } from "../context/UserContext";
import Header from "./Header";

export default function Login() {
  // const { userName, setUserName } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const { users } = useContext(UsersContext);
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
          for (let i = 0; i < users.length; i++) {
            if (
              testName === users[i].name &&
              testPassword === users[i].password
            ) {
              setflag(true);
            }
          }
        }}
      />
      <input
        name="password"
        placeholder="password"
        onChange={(e) => {
          testPassword = e.target.value;
          console.log(users);
          for (let i = 0; i < users.length; i++) {
            if (
              testName === users[i].name &&
              testPassword === users[i].password
            ) {
              setflag(true);
            }
          }
        }}
      />

      <br />

      <Link to="/NewUser" className="new_u">
        new user
      </Link>
      <br />

      <Link to={flag ? "/main" : "/"} className="log">
        main
      </Link>
    </div>
  );
}
