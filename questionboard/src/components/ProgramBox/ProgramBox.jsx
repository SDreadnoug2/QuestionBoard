import "./ProgramBox.css";
import React, { useContext } from "react";
import { LoggedInContext } from "../../context/LogInContext";

export default function ProgramBox() {
  const isLoggedIn = React.useCallback(LoggedInContext);
  return (
    <div className="ProgramBox">
      <p className="ProgramBox__text"> AskOS ~ Program List</p>
      <div className="ProgramBox__programs">
        <div className="button">
          <button
            type="button"
            className="ProgramBox__signIn ProgramBox__button"
          ></button>
          <p className="button__text">Sign In</p>
        </div>
        <div className="button">
          <button
            type="button"
            className="ProgramBox__signOut ProgramBox__button"
          ></button>
          <p className="button__text">Sign Out</p>
        </div>
        <div className="button">
          <button
            type="button"
            className="ProgramBox__settings ProgramBox__button"
          ></button>
          <p className="button__text">Settings</p>
        </div>
        <div className="button">
          <button
            type="button"
            className="ProgramBox__answer ProgramBox__button"
          ></button>
          <p className="button__text">Answer</p>
        </div>
        <div className="button">
          <button
            type="button"
            className="ProgramBox__ask ProgramBox__button"
          ></button>
          <p className="button__text">Ask</p>
        </div>
        <div className="button">
          <button
            type="button"
            className="ProgramBox__about ProgramBox__button"
          ></button>
          <p className="button__text">About</p>
        </div>
      </div>
    </div>
  );
}
