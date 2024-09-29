import "./Main.css";
import React, { useContext, useEffect } from "react";
import Ask from "../Ask/Ask";
import Answer from "../Answer/Answer";
import { LoggedInContext } from "../../context/LogInContext";
import { activeProgramContext } from "../../context/ProgramContext";
import SignIn from "../SignIn/signin";

function Main() {
  const isLoggedIn = React.useContext(LoggedInContext);
  const activeProgram = React.useContext(activeProgramContext);


  return <div className="Main">
    <SignIn/>
  </div>;
}

export default Main;
