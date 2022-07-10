import "./App.css";

import Layout from "./componnt/Layout";
import { useState } from "react";
import { UserContext, UsersContext } from "./context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState({ name: "avi", password: "123" });
  const [users, setUsers] = useState([user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout />
    </UserContext.Provider>
  );
}

export default App;
