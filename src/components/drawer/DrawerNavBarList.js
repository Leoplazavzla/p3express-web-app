import React from 'react';
import {Box, Divider, List, ListItem, ListItemIcon, ListItemText, ListItemButton} from '@mui/material';
import {Dashboard as DashboardIcon} from "@mui/icons-material"
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TableChartIcon from '@mui/icons-material/TableChart';
import Strings from "../../resources/Strings";
import paths from "../../resources/paths"
import {Link} from "react-router-dom"

export default function DrawerNavBarList() {

    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem button disablepadding={"false"} component={Link} to={paths.dashboard}>
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary={Strings.navBar.dashboard}/>
                    </ListItem>

                    <ListItem
                        disablepadding={"false"}
                        color={"primary"} button
                        component={Link}
                        to={paths.ganttChart}>
                        <ListItemIcon>
                            <AccountTreeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={Strings.navBar.ganttChart}/>
                    </ListItem>

                    <ListItem
                        disablepadding={"false"}
                        color={"primary"} button
                        component={Link}
                        to={paths.kanban}>
                        <ListItemIcon>
                            <TableChartIcon/>
                        </ListItemIcon>
                        <ListItemText primary={Strings.navBar.kanban}/>
                    </ListItem>

                </List>
            </nav>
            <Divider/>
        </Box>
    );
}