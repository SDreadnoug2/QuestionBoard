import "./Main.css"
import React, { useContext } from "react";
import Ask from "../Ask/Ask"
import Answer from "../Answer/Answer"
import SignOutImage from "../../../public/assets/SignOut.png";
import SignInImage from "../../../public/assets/SignIn.png";
import AboutImage from "../../../public/assets/About.png";
import AnswerImage from "../../../public/assets/Answer.png";
import AskImage from "../../../public/assets/Ask.png";
import SettingsImage from "../../../public/assets/Settings.png";
import { LoggedInContext } from "../../context/LogInContext";

function Main() {

    const isLoggedIn = React.useContext(LoggedInContext);

    return (
        <div className="Main">
            {isLoggedIn ? (
              <img className="Main__button"src={SignOutImage}/>
            ) : (
              <img className="Main__button"src={SignInImage}/>
            )}
            <img className="Main__button"src={SignOutImage}/>
            <img className="Main__button"src={SignOutImage}/>
            <img className="Main__button"src={SignOutImage}/>
            <img className="Main__button"src={SignOutImage}/>
            <img className="Main__button"src={SignOutImage}/>
            <h1>bs</h1>

        </div>
    )
}  

export default Main