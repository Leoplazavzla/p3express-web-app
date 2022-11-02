import React from 'react';
import {Box, Divider, List, ListItem, ListItemIcon, ListItemText, ListItemButton} from '@mui/material';
import {Dashboard as DashboardIcon} from "@mui/icons-material"
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TableChartIcon from '@mui/icons-material/TableChart';
import PeopleIcon from '@mui/icons-material/People';
import Strings from "../../resources/Strings";
import paths from "../../resources/paths"
import {Link} from "react-router-dom"
import {useAuth} from "../../contexts/AuthContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";

export default function DrawerNavBarList() {

    const {currentUser, logOut} = useAuth();
    const [roleLocalStorage, setRoleLocalStorage] = useLocalStorage('userRole', '')

    const signOutUser = () => {
        setRoleLocalStorage('')
        logOut()
    }

    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {currentUser ?
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem
                            button
                            disablepadding={"false"}
                            component={Link}
                            to={paths.dashboard}
                        >
                            <ListItemIcon>
                                <DashboardIcon/>
                            </ListItemIcon>
                            <ListItemText primary={Strings.navBar.dashboard}/>
                        </ListItem>
                        <ListItem
                            disablepadding={"false"}
                            color={"primary"} button
                            component={Link}
                            to={paths.projects.list}>
                            <ListItemIcon>
                                <AccountTreeIcon/>
                            </ListItemIcon>
                            <ListItemText primary={Strings.projects.name}/>
                        </ListItem>
                        <ListItem
                            disablepadding={"false"}
                            color={"primary"} button
                            component={Link}
                            to={paths.users.list}
                        >
                            <ListItemIcon>
                                <PeopleIcon/>
                            </ListItemIcon>
                            <ListItemText primary={Strings.navBar.users}/>
                        </ListItem>
                    </List>
                </nav>
                :
                <div></div>
            }
            <Divider/>
            <nav aria-label="secondary mailbox folders">
                {currentUser ?
                    <List>
                        <ListItem disablepadding={"false"} button>
                            <ListItemButton onClick={signOutUser}>
                                <ListItemText primary={Strings.navBar.logout}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    :
                    <List>
                        <ListItem disablepadding={"false"} button>
                            <ListItem component={Link} to={paths.register}>
                                <ListItemText primary={Strings.register.name}/>
                            </ListItem>
                        </ListItem>
                    </List>
                }
            </nav>
        </Box>
    );
}