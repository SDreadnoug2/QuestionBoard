import "./Main.css";
import React, { useContext } from "react";
import Ask from "../Ask/Ask";
import Answer from "../Answer/Answer";
import { LoggedInContext } from "../../context/LogInContext";

function Main() {
  const isLoggedIn = React.useContext(LoggedInContext);

  return <div className="Main"></div>;
}

export default Main;
