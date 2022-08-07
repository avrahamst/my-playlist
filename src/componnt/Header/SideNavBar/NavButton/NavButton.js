import styles from "./style.module.css";
import { Link } from "react-router-dom";

// Creator : Team A - Shahar.
export function NavButton(props) {
  return (
    <div className={`${styles.outerdiv}`} onClick={props.onClick}>
      <div className={`${styles.icon}`}>{props.icon}</div>
      <div className={`${styles.txt}`}> {props.text}</div>
    </div>
  );
}
