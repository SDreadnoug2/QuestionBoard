import "./LoginModal.css"
import { useState } from "react"
import ModalWithForm from "../ModalForm/ModalWithForm";
import useValidation from "../../utils/validator";
function LoginModal({onLoginSubmit}) {
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const handlePasswordInput = (e) => setPassword(e.target.value);
    const handleUserNameInput = (e) => setUserName(e.target.value);
    const isFieldsFilled = useValidation(userName, password, true);

    function handleSubmit(e) {
        e.preventDefault();
        onLoginSubmit(userName, password)
    }

    return(
        <ModalWithForm
        name="Login"
        title="Log In"
        onSubmit={handleSubmit}
        buttonText="Login"
        isFormValid={isFieldsFilled}
        >
            <div className="LoginModal__Container">
                <label className="Modal__label" htmnlfor="username" >Username</label>
                <input className="Modal__input"type="text" value={userName} onChange={handleUserNameInput}id="userName"></input>
                <label className="Modal__label" htmnlfor="password"  >Password</label>
                <input className="Modal__input"type="password" value={password} onChange={handlePasswordInput}id="password"></input>
            </div>
        </ModalWithForm>
    )
}

export default LoginModal