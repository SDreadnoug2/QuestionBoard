import { useState, useContext, useEffect, act } from "react";
import "./App.css";
import Header from "../Header/Header";
import Ask from "../Ask/Ask";
import Answer from "../Answer/Answer";
import { getQuestions, getUserInfo } from "../../utils/api";
import { QuestionsContext } from "../../context/QuestionsContext";
import { ModalContext } from "../../context/ModalContext";
import { LoggedInContext } from "../../context/LogInContext";
import { userInfoContext } from "../../context/UserInfoContext";
import { activeProgramContext } from "../../context/ProgramContext";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { register, login } from "../../utils/auth";
import { setToken, getToken, removeToken } from "../../utils/token";
import Main from "../Main/Main";
import Footer from "../footer/Footer";
import ProgramBox from "../ProgramBox/ProgramBox";

function App() {
  const [mode, setMode] = useState("Ask");
  const [questions, setQuestions] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ userName: "", id: "" });
  const [activeProgramBox, setActiveProgram] = useState(null);

  function loadQuestions() {

    getQuestions(getToken()).then((data) => {
      setQuestions(data);
    });
  }

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  function switchMode() {
    if (mode === "Ask") {
      setMode("Answer");
    } else {
      setMode("Ask");
    }
  }

  const onLoginSubmit = (username, password) => {
    login(username, password).then((data) => {
      setToken(data.token);
      updateUser(data.token);
      setIsLoggedIn(true);
      closeModal();
    });
  };

  const signOut = () => {
    removeToken();
    setIsLoggedIn(false);
  };

  const updateUser = (jwt) => {
    getUserInfo(jwt).then((res) => {
      setUserInfo({ userName: res.username, id: res._id });
    });
    setIsLoggedIn(true);
  };

  const onRegisterSubmit = (username, password, confirmPassword) => {
    if (password === confirmPassword) {
      register(username, password).then(() => {
        console.log("user registered successfully.");
      });
    } else {
      console.log("passwords didn't match.");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      loadQuestions();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    updateUser(jwt);
  }, []);

  return (
    <activeProgramContext.Provider value={{activeProgramBox, setActiveProgram}}>
      <userInfoContext.Provider value={userInfo}>
        <LoggedInContext.Provider value={isLoggedIn}>
          <ModalContext.Provider
            value={{ activeModal, setActiveModal, closeModal }}
          >
            <QuestionsContext.Provider value={questions}>
              <div className="App">
                <Header
                  className="header"
                />
                <div className="App__body">
                  <ProgramBox />
                  <Main />
                </div>
                <Footer className="app__footer" />
                {activeModal === "loginModal" && (
                  <LoginModal onLoginSubmit={onLoginSubmit} />
                )}
                {activeModal === "registerModal" && (
                  <RegisterModal onRegisterSubmit={onRegisterSubmit} />
                )}
              </div>
            </QuestionsContext.Provider>
          </ModalContext.Provider>
        </LoggedInContext.Provider>
      </userInfoContext.Provider>
    </activeProgramContext.Provider>
  );
}

export default App;
