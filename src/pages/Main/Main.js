import { React } from "react";
import axios from "axios";
import Header from "../../componnt/Header/Header";
import Body from "../../componnt/Body/Body";
import Footer from "../../componnt/Footer/Footer";

export default function Main() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
