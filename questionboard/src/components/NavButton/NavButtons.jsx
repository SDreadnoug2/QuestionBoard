import "./NavButton.css"

export default function NavButton(props){

    return(
        <div className="NavButton">
            <img src={props.image} alt={props.action} className="NavButton__image" />
            <p className="NavButton__text">{props.action}</p>
        </div>
    )
}