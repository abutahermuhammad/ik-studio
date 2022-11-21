import React from "react";
import LOGO from "./logo-wide.png";
import S from "./style.css";

export default function Logo() {
  return (
    <img className={S.__logo} src={LOGO} alt="Islamer Kantho" height={28} />
  );
  //   return "Islamer Kantho";
}
