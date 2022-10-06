import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const ButtonNew = (props) => {
    return (
        <Button
            component={Link}
            to={props.path}
            variant={"contained"}
        >
            {props.title}
        </Button>
    )
}

export default ButtonNew;
