import "./User.css"

function User() {
    return(
        <div className="user">
            <div className="user__header">
                <h1 className="user__text">Username</h1>
            </div>
            <h2 className="user__text">Ranking</h2>
            <h2 className="user__text">User Score</h2>
            <h2 className="user__text">Asked</h2>
            <h2 className="user__text">Answered</h2>
        </div>
    )
}


export default User