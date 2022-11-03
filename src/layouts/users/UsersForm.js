import React, {useEffect, useState} from "react";
import {Button, Grid, TextField} from "@mui/material";
import Strings from "../../resources/Strings";
import {useSelector} from "react-redux";
import {auth} from '../../firebase/firebaseConfig'
import {useAuth} from "../../contexts/AuthContext";
import {createRoles, getUserData} from "../../firebase/firebaseFunctions";

const UsersForm = () => {

    const userState = useSelector(state => state.companyName)
    const {register, currentUser} = useAuth()

    const [userData, setUserData] = useState({})

    useEffect(() => {
        getUserData(currentUser.uid).then((res) => {
            setUserData(res)
        })
    }, [])

    const [user, setUser] = useState({
        email: '',
        password: '',

    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        }
        )
    }

    const addNewUser = async (e) => {
        e.preventDefault();
        /*const defaultRole = 'consultant'
        await register(auth, user.email, user.password)
        await createRoles(user.email, defaultRole, userData.email, userData.company)*/

    }

    return (
        <Grid >
            <Grid item>
                <TextField
                    margin="normal"
                    name={"email"}
                    type={"email"}
                    label={Strings.register.email}
                    value={user.email}
                    onChange={handleChange}
                />

            </Grid>
            <Grid item>
                <TextField
                    name={"password"}
                    margin="normal"
                    type={"password"}
                    label={Strings.register.password}
                    value={user.password}
                    onChange={handleChange}
                />

            </Grid>
            <Grid item>
                <Button
                    onClick={addNewUser}
                    variant={"contained"}
                >
                    {Strings.register.create}
                </Button>

            </Grid>

        </Grid>
    )

}

export default UsersForm;