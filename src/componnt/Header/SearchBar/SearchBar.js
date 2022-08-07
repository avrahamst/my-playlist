import { BsSearch } from "react-icons/bs";
import "./style.css";

import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { SongContext } from "../../../context/SongContext";
import axios from "axios";

export default function SearchBar(props) {
  const { user, setUser } = useContext(UserContext);
  const { songs, setSongs } = useContext(SongContext);

  const [text, setText] = useState("");

  const sentSerch = async () => {
    const res = await axios.get(`http://localhost:3001/songs/search/${text}`, {
      headers: {
        Authorization: `bearer ${localStorage.token}`,
      },
    });
    console.log(res);
    setSongs(res);
  };
  return (
    <div className="search-bar-container" dir="rtl">
      <div className="serch-bar-height  search-bar-form">
        <input
          type="text"
          className="form-control form-input"
          placeholder="חפש שירים..."
          onChange={(v) => {
            setText(v.target.value);
          }}
        />

        <span className="search-bar-left-pan">
          <BsSearch
            onClick={() => {
              sentSerch();
            }}
          />
        </span>
      </div>
    </div>
  );
}
