import {Link} from "react-router-dom";

const ButtonNew = (props) => {
    return(
        <Link to={props.path}>{props.title}</Link>
    )
}

export default ButtonNew;
