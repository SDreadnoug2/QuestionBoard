import './Header.css'
import { useContext } from 'react'
import { LoggedInContext } from '../../context/LogInContext'
import { userInfoContext } from '../../context/UserInfoContext';


function Header(props) {
  const isLoggedIn = useContext(LoggedInContext);
  const userInfo = useContext(userInfoContext)
  
  return (
      <div className='header'>
        <div className="header__container">
          <button className="header__button">About</button>
          <button className="header__button">Stats</button>
        { !isLoggedIn && (
        <>
          <button type='button' className='header__button' onClick={props.loginModal}>Login</button>
          <button type='button' className='header__button' onClick={props.registerModal}>Sign Up</button>
        </>
        )}
        {isLoggedIn && (
          <>
            <button className="header__button">{userInfo.username}</button>
            <button type="button" onClick={props.signOut}>Sign Out</button>
          </>
        )}
        </div>
        <h1 className='header__text'>ANSQ</h1>
      </div>
  )
}

export default Header
