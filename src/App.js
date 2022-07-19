import "./App.css";

import Layout from "./componnt/Layout/Layout";
import { useState, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import axios from "axios";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    // check if have token and get userby token
    console.log("1");
    if (localStorage.token && !user) {
      console.log(localStorage.token);
      axios
        .get("http://localhost:3001/users/user", {
          headers: {
            Authorization: `bearer ${localStorage.token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setUser(response);
        });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout />
    </UserContext.Provider>
  );
}

export default App;
