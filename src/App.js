import "./App.css";

import Layout from "./componnt/Layout/Layout";
import { useState, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import { SongContext } from "./context/SongContext";
import axios from "axios";

function App() {
  const [user, setUser] = useState();
  const [songs, setSongs] = useState();

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
    <SongContext.Provider value={{ songs, setSongs }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout />
      </UserContext.Provider>
    </SongContext.Provider>
  );
}

export default App;
