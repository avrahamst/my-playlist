import styles from "./style.module.css";
import { useRef, useState, useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Si1001Tracklists } from "react-icons/si";
import { MdLogout } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { NavButton } from "./NavButton/NavButton";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";
import { SongContext } from "../../../context/SongContext";

export const NavBar = (props) => {
  const togleRef = useRef();
  const { songs, setSongs } = useContext(SongContext);

  const navigate = useNavigate();

  const logOut = function () {
    localStorage.token = null;
    navigate("/login");
  };
  const choosePlayList = async function () {
    try {
      let res = await axios.get("http://localhost:3001/songs/PlayLiat");

      // TODO:
      //desplay the result of on the list on popup
      // setSongs(res);
    } catch (e) {}
  };

  const addPlayList = async function () {
    const name = await Swal.fire({
      title: "יצירת פלאי ליסט חדש",
      input: "text",
      inputLabel: "הכנס את שם הפלאי ליסט",
      inputPlaceholder: "Enter ",
    });

    if (name.value !== "") {
      try {
        let res = await axios.post("http://localhost:3001/songs/PlayLiat", {
          name: name.value,
        });
        if (res.statusCode === 200) {
          Swal.fire(`נוצר פליי ליסט חדש`);
        }
      } catch (e) {}
    }
  };
  return (
    <div className={`${styles.containerr}`} ref={togleRef}>
      <div className={`${styles.opacity}`}>
        <div className={`${styles.box}`}>
          <div className={`${styles.icon_close}`}>
            <AiOutlineClose size="30px" color="red" onClick={props.close} />
          </div>
          <ul>
            <li className={`${styles.btn}`}>
              <NavButton
                icon={
                  <AiOutlinePlus className={`${styles.icon}`} size="30px" />
                }
                onClick={addPlayList}
                text="יצירת פלאי ליסט חדש"
                link="dashboard"
              />
            </li>
            <li className={`${styles.btn}`}>
              <NavButton
                onClick={choosePlayList}
                icon={
                  <Si1001Tracklists className={`${styles.icon}`} size="30px" />
                }
                text="בחירת פליי ליסט"
                link="settings"
              />
            </li>
            <li className={`${styles.btn}`}>
              <NavButton
                onClick={props.setClose}
                icon={<FiSettings className={`${styles.icon}`} size="30px" />}
                text="הגדרות"
                link="settings"
              />
            </li>
            <li className={`${styles.btn}`}>
              <NavButton
                onClick={props.setClose}
                icon={
                  <FaRegAddressBook className={`${styles.icon}`} size="30px" />
                }
                text="יצירת קשר"
                link="/contact"
              />
            </li>
            <li className={`${styles.btn}`}>
              <NavButton
                onClick={logOut}
                icon={<MdLogout className={`${styles.icon}`} size="30px" />}
                text="יציאה"
                link="sign-out"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
