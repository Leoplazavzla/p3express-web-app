import React, {useEffect, useState} from "react";
import MaterialReactTable from "material-react-table";
import UserTableFormatter from "../../tableFormatters/UserTableFormatter";
import {
    Box,
    Button,
    IconButton,
    MenuItem,
    Tooltip,
    Select,
} from '@mui/material';
import {Delete} from '@mui/icons-material';
import {functions} from '../../firebase/firebaseConfig'
import {httpsCallable} from 'firebase/functions'
import {updateUserRole} from "../../firebase/firebaseFunctions";

const UsersList = (props) => {

    const [userData, setUserData] = useState()
    const [roleToChange, setRoleToChange] = useState();

    useEffect((() => {
        if (props.userData.length !== 0) {
            setUserData(props.userData)
        }
    }), [props])

    const userRoles = [
        'consultant',
        'projectManager',
        'portfolioManager'
    ]

    const SelectRoleToChange = (event) => {
        setRoleToChange(event.target.value);
    };

    const handleChangeRole = async (row) => {
        const userData = {
            id: row.original.id,
            role: roleToChange

        }
        console.log(userData)
        const changeRole = httpsCallable(functions, 'changeUserRoleTest')
        await updateUserRole(userData.id, userData.role)
        try {
            await changeRole(userData)
        }catch(err) {
            console.log(err)
        }


    }

    return (
        <>
            {userData &&
                <MaterialReactTable
                    columns={UserTableFormatter}
                    data={userData}
                    enableRowActions={true}
                    positionActionsColumn="last"
                    displayColumnDefOptions={{
                        'mrt-row-actions': {
                            header: 'Change Account Settings', //change header text
                            size: 300, //make actions column wider
                        },
                    }}
                    renderRowActions={({row, table}) => (
                        <Box sx={{display: 'flex', flexFlow: 'initial', gap: '1rem'}}>
                            <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    autoWidth
                                    value={roleToChange}
                                    label="Role"
                                    onChange={SelectRoleToChange}
                                    sx={{minWidth: 'auto', color: 'black'}}
                                >
                                    {userRoles.map((role) => (
                                        <MenuItem
                                            key={role}
                                            value={role}
                                        >
                                            {role}
                                        </MenuItem>
                                    ))}
                                </Select>

                                <Button
                                    variant={'contained'}
                                    onClick={() => handleChangeRole(row)}
                                >
                                    {'Change Role'}
                                </Button>

                        <Tooltip arrow placement="right" title="Delete">
                                <IconButton color="error">
                                    <Delete/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        )}
                />}
        </>
    )
}

export default UsersList;
