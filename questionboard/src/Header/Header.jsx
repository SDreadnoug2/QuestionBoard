import './Header.css'
import { useContext } from 'react'
import { LoggedInContext } from '../context/LogInContext'
import { userInfoContext } from '../context/UserInfoContext';


function Header(props) {
  const isLoggedIn = useContext(LoggedInContext);
  const userInfo = useContext(userInfoContext)
  
  return (
      <div>
        <p>Answer a question, Ask a question</p>
        { !isLoggedIn && (
        <>
          <button type='button' onClick={props.loginModal}>Login</button>
          <button type='button' onClick={props.registerModal}>Sign Up</button>
        </>
        )}
        {isLoggedIn && (
          <>
            <h1>{userInfo.userName}</h1>
            <button type="button" onClick={props.signOut}>Sign Out</button>
          </>
        )}
      </div>
  )
}

export default Header
