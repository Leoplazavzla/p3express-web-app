import React, {useState} from "react";
import {Grid, TextField} from "@mui/material";
import Strings from "../../resources/Strings";

const UsersForm = () => {

    const [user, setUser] = useState({
        email: null,
        password: null,

    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        }
        )

    }


    return (
        <Grid container>
            <Grid item>
                <TextField
                    margin="normal"
                    type={"email"}
                    label={Strings.register.email}
                    value={user.email}
                    onChange={handleChange}
                />

            </Grid>
            <Grid item>
                <TextField
                    margin="normal"
                    type={"email"}
                    label={Strings.register.password}
                    value={user.password}
                    onChange={handleChange}
                />

            </Grid>

        </Grid>
    )

}

export default UsersForm;