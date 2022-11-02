import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import Strings from "../resources/Strings";
import {auth} from "../firebase/firebaseConfig";
import BaseLayout from "../layouts/BaseLayout";
import {Alert, Button, Grid, TextField} from "@mui/material";
import {createRoles, addCompanyName, getCompanies} from "../firebase/firebaseFunctions";
import CompanyNamesDropdown from "../components/dropdowns/CompanyNamesDropdown";
import {useSelector} from "react-redux";
import {useLocalStorage} from "../hooks/useLocalStorage";

const Register = () => {

    let navigate = useNavigate();
    const {register, currentUser} = useAuth();
    const companyNameState = useSelector(state => state.companyName)
    const [userRoleLocalStorage, setUserRoleLocalStorage] = useLocalStorage('userRole', '')

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [registerPasswordError, setRegisterPasswordError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [companies, setCompanies] = useState([]);
    const [registeringUser, setRegisteringUser] = useState(false);

    const adduserToDatabase = async (user, companies) => {
        const companyExist = companies.some((company) => companyNameState.companyName === company.companyName)
        if (companyExist) {
            const companyName = companyNameState
            const defaultRole = 'consultant';
            await createRoles(user.uid, user.email, defaultRole, companyName).then(() => {
                setUserRoleLocalStorage(defaultRole)
            })
        } else {
            const companyName = companyNameState
            const portfolioManager = "portfolio";
            await createRoles(user.uid, user.email, portfolioManager, companyName).then(() => {
                setUserRoleLocalStorage(portfolioManager)
            })
            await addCompanyName(companyName)
        }
    }

    useEffect(() => {
        getCompanies().then((res) => setCompanies(res))
    }, [])

    useEffect(() => {

        if (currentUser) {
            adduserToDatabase(currentUser, companies)
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000)
        }
    }, [registeringUser])

    const userRegister = async (e) => {
        e.preventDefault()
        validations()
        if (!registerEmail.trim()) {
            //console.log("insert email")
            setEmailError(true)
            return
        }
        if (!registerPassword.trim()) {
            //console.log("insert password")
            setRegisterPasswordError(true)
            return
        }
        if (!confirmationPassword.trim()) {
            //console.log("insert  confirm password")
            setRegisterPasswordError(true)
            return
        }

        if (isValid === true) {
            try {
                setErrorMessage(null)
                setLoading(true)
                await register(auth, registerEmail, registerPassword)
                    .then(() => {
                        setRegisteringUser(true)
                    })
                    .then(() => {
                        setTimeout(() => {
                            setRegisteringUser(false)
                        }, 2000)
                    })
            } catch (err) {
                console.log(err)
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
        if (registerPassword === '' || confirmationPassword === '') {
            setRegisterPasswordError(Strings.register.addPassword)
            setErrorMessage(Strings.register.addPassword)
            setConfirmationPassword("")
        }
        if (registerPassword.length < 6 || confirmationPassword < 6) {
            setRegisterPasswordError(Strings.register.passLowerThanSix)
            setErrorMessage(Strings.register.passLowerThanSix)
            setConfirmationPassword("")
        }

        if (regEx.test(registerEmail) === false || registerEmail === "") {
            setEmailError(true)
            setErrorMessage(Strings.register.invalidEmail)
        }
        if (regEx.test(registerEmail) === true && registerEmail !== '') {
            setEmailError(false)
        } else {
            setEmailError(false)
        }

        if (registerPasswordError === false && emailError === false) {
            //console.log(regEx.test(registerEmail))
            setIsValid(true)
            //console.log("Is Valid?: ", isValid)
        }
    }

    return (
        <BaseLayout>
            <Grid>
                <h2>Register</h2>
                {errorMessage ? (<Alert severity={"error"}>{errorMessage}</Alert>) : null}
                <Grid item>
                    <CompanyNamesDropdown/>
                </Grid>
                <Grid item>
                    <TextField
                        margin="normal"
                        type={"email"}
                        label={Strings.register.email}
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        error={emailError}
                    />
                </Grid>

                <Grid item>
                    <TextField
                        margin="normal"
                        label={Strings.register.password}
                        type={"password"}
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        error={registerPasswordError}
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
                        error={registerPasswordError}
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