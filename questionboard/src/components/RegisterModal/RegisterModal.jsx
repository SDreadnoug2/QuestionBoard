import ModalWithForm from "../ModalForm/ModalWithForm";
import "./RegisterModal.css"
import { useState } from "react"
import useValidation from "../../utils/validator";

function RegisterModal({onRegisterSubmit}) {
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handlePasswordInput = (e) => setPassword(e.target.value);
    const handleUserNameInput = (e) => setUserName(e.target.value);
    const handleConfirmPasswordInput = (e) => setConfirmPassword(e.target.value);
    const isFieldsFilled = useValidation(userName, password, confirmPassword);

    function handleSubmit(e){
        e.preventDefault();
        onRegisterSubmit(userName, password, confirmPassword);
    }

    return(
        <ModalWithForm
        name="register"
        title="Sign Up"
        onSubmit={handleSubmit}
        buttonText="Register"
        isFormValid={isFieldsFilled}
        >
            <div className="RegisterModal__Container">
                <label className="Modal__label" htmnlfor="username" >Username</label>
                <input className="Modal__input"type="text" value={userName} onChange={handleUserNameInput}id="userName"></input>
                <label className="Modal__label" htmnlfor="password"  >Password</label>
                <input className="Modal__input"type="password" value={password} onChange={handlePasswordInput}id="password"></input>
                <label className="Modal__label"htmnlfor="confirmPassword" >confirmPassword</label>
                <input className="Modal__input"type="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordInput}id="confirmPassword"></input>
            </div>
        </ModalWithForm>
    )
}

export default RegisterModal