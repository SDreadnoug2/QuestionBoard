import './Header.css'
import { useContext } from 'react'
import { LoggedInContext } from '../../context/LogInContext'
import { userInfoContext } from '../../context/UserInfoContext';


function Header(props) {
  const isLoggedIn = useContext(LoggedInContext);
  const userInfo = useContext(userInfoContext)
  
  return (
      <div className='header'>
        <p className='header__text'>"No great intellectual thing was ever done by great effort."</p>
        <p className='header__text header__quote'>-Theodore Roosevelt</p>
      </div>
  )
}

export default Header
