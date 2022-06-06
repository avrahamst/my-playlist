import { React, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Main() {
  const { user } = useContext(UserContext);
  const [pplay, usePplay] = useState();

  return (
    <div>
      <div className="log">hello {user.name}</div>

      <div>
        <input placeholder="serch" />
      </div>

      <br />
      <div></div>
    </div>
  );
}
