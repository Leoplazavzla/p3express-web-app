import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import Strings from "../resources/Strings";
import {auth} from "../firebase/firebaseConfig";
import BaseLayout from "../layouts/BaseLayout";
import {Alert, Button, Grid, TextField} from "@mui/material";

const Register = () => {
    console.log(auth)

    let navigate = useNavigate();
    const {register, currentUser} = useAuth();

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [registerPasswordError, setRegisterPasswordError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if(currentUser){
            navigate("/")
        }

    }, [])

    const userRegister = async (e) => {
        e.preventDefault()
        validations()
        if(!registerEmail.trim()){
            console.log("insert email")
            return
        }
        if(!registerPassword.trim()){
            console.log("insert password")
            return
        }
        if(!confirmationPassword.trim()){
            console.log("insert  confirm password")
            return
        }

        if(isValid === true){
            console.log("is valid")
            try {
                setErrorMessage(null)
                setLoading(true)
                await register(auth, registerEmail, registerPassword)
                navigate("/")
            } catch (err){
                setErrorMessage("Please check your details")
            }
        }
        setLoading(false)
    }

    const validations = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        if (registerPassword !== confirmationPassword) {
            setRegisterPasswordError(Strings.register.passDontMatch)
            setErrorMessage(Strings.register.passDontMatch)
            setConfirmationPassword("")
        }
        if(registerPassword === '' || confirmationPassword === ''){
            setRegisterPasswordError(Strings.register.addPassword)
            setErrorMessage(Strings.register.addPassword)
            setConfirmationPassword("")
        }
        if(registerPassword.length < 6 || confirmationPassword < 6){
            console.log(registerPassword.length)
            setRegisterPasswordError(Strings.register.passLowerThanSix)
            setErrorMessage(Strings.register.passLowerThanSix)
            setConfirmationPassword("")
        }

        if(regEx.test(registerEmail) === false || registerEmail === ""){
            setEmailError(true)
            setErrorMessage(Strings.register.invalidEmail)
        }
        if(regEx.test(registerEmail) === true && registerEmail !== ''){
            setEmailError(false)
            console.log("email valid")
        }else {
            setEmailError(false)
        }

        if(registerPasswordError === false && emailError === false){
            console.log(registerPasswordError, emailError)
            console.log(regEx.test(registerEmail))
            setIsValid(true)
            console.log("Is Valid?: ", isValid)
        }

    }

    return(
        <BaseLayout>
            <Grid>
                {errorMessage ? (<Alert severity={"error"}>{errorMessage}</Alert>) : null}
                <Grid item>
                    <TextField
                        margin="normal"
                        type={"email"}
                        label={Strings.register.email}
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value) }
                    />
                </Grid>

                <Grid item>
                    <TextField
                        margin="normal"
                        label={Strings.register.password}
                        type={"password"}
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value) }
                    />
                </Grid>

                <Grid item>
                    <TextField
                        margin="normal"
                        required
                        label={Strings.register.passwordConfirmation}
                        type={"password"}
                        value={confirmationPassword || ''}
                        onChange={(e) => setConfirmationPassword(e.target.value)}
                        error={Boolean(registerPasswordError)}
                    />
                </Grid>

                <Grid item>
                    <Button
                        disabled={loading}
                        type={"submit"}
                        variant={"contained"}
                        onClick={userRegister}
                    >
                        {Strings.register.create}
                    </Button>
                </Grid>

            </Grid>
        </BaseLayout>
    )
}

export default Register;