import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, UsersContext } from "../context/UserContext";

export default function NewUser() {
  const { user, setUser } = useContext(UserContext);
  const { users, setUsers } = useContext(UsersContext);

  let testName = "",
    testPassword = "";
  return (
    <div>
      <form>
        {/* <input name="fName" placeholder="First name" />
        <input name="lName" placeholder="Last Name" /> */}
        <input
          name="userName"
          placeholder="User Name"
          onChange={(e) => {
            testName = e.target.value;
          }}
        />
        <input
          password="password"
          placeholder="password"
          onChange={(e) => {
            testPassword = e.target.value;
          }}
        />
      </form>
      <button
        onClick={() => {
          setUser({ name: testName, password: testPassword });
          users.push({ name: testName, password: testPassword });
          setUsers(users);
        }}
      >
        Insert
      </button>
    </div>
  );
}
