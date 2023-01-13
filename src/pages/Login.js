import BaseLayout from "../layouts/BaseLayout";
import {Alert, Button, Grid, TextField} from "@mui/material";
import Strings from "../resources/Strings";
import {useEffect, useState} from "react";
import {auth} from "../firebase/firebaseConfig"
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();
    const {logIn} = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {

    })

    const singIn = async (e) => {
        e.preventDefault()
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        if(regEx.test(email) || email === ""){
            setErrorMessage(Strings.login.invalidEmail)
        }else if(regEx.test(email) || email !== ""){
            setErrorMessage(Strings.login.invalidEmail)
        }

        try{
            setErrorMessage(null)
            setLoading(true)
            await logIn(auth, email, password)
                .then(() => {
                    setLoading(false)
                    navigate("/dashboard")
                })
        }catch (error){
            console.log(error)
            setErrorMessage(Strings.login.invalidAccount)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
    }

    return(
        <BaseLayout>
            <Grid>
                {errorMessage ? (<Alert severity={"error"}>{errorMessage}</Alert>) : null}
                <Grid item>
                    <TextField
                        type={"email"}
                        label={Strings.login.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label={Strings.login.password}
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value) }
                    />
                </Grid>
                <Grid item>
                    <Button
                        disabled={loading}
                        type={"submit"}
                        variant={"contained"}
                        onClick={singIn}
                    >
                        {Strings.login.name}
                    </Button>
                </Grid>
            </Grid>
        </BaseLayout>
    )
}

export default Login;