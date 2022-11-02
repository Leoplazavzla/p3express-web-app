import React from "react";
import paths from "../../resources/paths";
import ButtonNew from "../../components/buttons/ButtonNew";
import UsersList from "../../layouts/users/UsersList"

const UsersTable = () => {

    return (
        <>
            <h2>Users List</h2>
            <ButtonNew
                path={paths.users.newUser}
                title={"Create new user"}
            />

        </>

    )
}

export default UsersTable;