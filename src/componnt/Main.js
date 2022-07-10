import { React, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Header from "./Header";

export default function Main() {
  const { user } = useContext(UserContext);
  const [pplay, setPplay] = useState();

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
  //     "X-RapidAPI-Key": "c4cddc9027mshd1e64670419fcbap1cdd9bjsn46d7894034bc",
  //   },
  // };
  // useEffect(() => {
  //   fetch(
  //     "https://simple-youtube-search.p.rapidapi.com/playlist?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       setPplay(response);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // });
  // return (
  //   <div>
  //     <div className="log">hello {user.name}</div>

  //     <div>
  //       <input placeholder="serch" />
  //     </div>
  //     <img src={pplay.result.thumbnail} />
  //     <br />
  //     <div></div>
  //   </div>
  // );
  // const { user } = useContext(UserContext);
  // const [pplay, usePplay] = useState();

  return (
    <div>
      <Header />
    </div>
  );
}
