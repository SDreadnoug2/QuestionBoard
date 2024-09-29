import "./ProgramBox.css";
import React, { act, useContext } from "react";
import { LoggedInContext } from "../../context/LogInContext";
import { activeProgramContext } from "../../context/ProgramContext";

export default function ProgramBox() {
  const isLoggedIn = React.useContext(LoggedInContext);
  const {activeProrgram, setActiveProgram} = React.useContext(activeProgramContext);
  return (
    <div className="ProgramBox">
      <p className="ProgramBox__text"> AskOS ~ Program List</p>
      <div className="ProgramBox__programs">
        <div className="button">
          <button
            type="button"
            className="ProgramBox__signIn ProgramBox__button"
            onClick={() => setActiveProgram("signIn")}
          ></button>
          <p className="button__text">Sign In</p>
        </div>
        <div className="button">
          <button
            type="button"
            className="ProgramBox__signOut ProgramBox__button"
            onClick={() => setActiveProgram("signOut")}
          ></button>
          <p className="button__text">Sign Out</p>
        </div>
        <div className="button">
          <button
            type="button"
            className="ProgramBox__settings ProgramBox__button"
            onClick={() => setActiveProgram("Settings")}
          ></button>
          <p className="button__text">Settings</p>
        </div>
        <div className="button">
          <button
            type="button"
            className="ProgramBox__answer ProgramBox__button"
            onClick={() => setActiveProgram("Answer")}
          ></button>
          <p className="button__text">Answer</p>
        </div>
        <div className="button">
          <button
            type="button"
            className="ProgramBox__ask ProgramBox__button"
            onClick={() => setActiveProgram("Ask")}
          ></button>
          <p className="button__text">Ask</p>
        </div>
        <div className="button">
          <button
            type="button"
            className="ProgramBox__about ProgramBox__button"
            onClick={() => setActiveProgram("About")}
          ></button>
          <p className="button__text">About</p>
        </div>
      </div>
    </div>
  );
}
