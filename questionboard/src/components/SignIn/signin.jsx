import "./signin.css"

function SignIn(props) {
 
    return (
    <div className="signIn">
        <h2 className="signIn__Title">Sign In</h2>
        <h2 className="signIn__Switch">or Register</h2>
        <form className="signIn__form"></form>
            <label htmlFor="username">Username</label>
            <input type="username" id="username" name="username" placeholder="Username" className="SignIn__username"required/>
            <label htmlFor="username">Username</label>
            <input type="password" id="password" name="password" placeholder="Password" className="SignIn__password"required/>

    </div>
    )

  }
  
  export default SignIn;