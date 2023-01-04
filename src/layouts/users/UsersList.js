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

    return (
        <>
            {userData &&
                <MaterialReactTable
                    columns={UserTableFormatter}
                    data={userData}
                    enableRowActions={true}
                    positionActionsColumn="last"
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
