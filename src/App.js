import "./App.css";
import Layout from "./componnt/Layout";
import { useState } from "react";
import { UserContext, UsersContext } from "./context/UserContext";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    password: "123",
    aeg: "",
    phoneNumber: "",
    email: "avi@gmail.com",
  });
  const [users, setUsers] = useState([user]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout />
      </UserContext.Provider>
    </UsersContext.Provider>
  );
}

export default App;
