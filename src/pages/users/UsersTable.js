import React, {useEffect, useState} from "react";
import paths from "../../resources/paths";
import ButtonNew from "../../components/buttons/ButtonNew";
import UsersList from "../../layouts/users/UsersList"
import {useAuth} from "../../contexts/AuthContext";
import {getUserData, getUsersByCompany} from "../../firebase/firebaseFunctions";
import {CircularProgress} from "@mui/material";

const UsersTable = () => {

    const {currentUser} = useAuth()
    const [userCompany, setUserCompany] = useState()
    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        getUserData(currentUser.uid).then((res) => {
            setUserCompany(res.company)
        })
    }, [])

    useEffect(() => {
        if(userCompany){
            getUsersByCompany(userCompany).then((res) => {
                setUsersList(res)
            })
        }
    }, [userCompany])

    return (
        <>
            <h2>Users List</h2>
            <ButtonNew
                path={paths.users.newUser}
                title={"Create new user"}
            />
            {usersList === [] ? <CircularProgress/> : <UsersList userData={usersList}/>}

        </>

    )
}

export default UsersTable;