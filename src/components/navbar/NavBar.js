import React from "react";
import {Menu as MenuIcon} from "@mui/icons-material"
import {AppBar, IconButton, Toolbar, Typography, Stack} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Strings from "../../resources/Strings"
import paths from "../../resources/paths"
import {Link} from "react-router-dom"
import {useAuth} from "../../contexts/AuthContext";

const useStyles = makeStyles(theme => ({
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {}
        },
        title: {
            flexGrow: 1
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${240}px)`,
                marginLeft: 240
            }
        },
        toolbar: theme.mixins.toolbar,
    })
)

const NavBar = (props) => {
    const classes = useStyles();
    const {currentUser} = useAuth();

    return (
        <AppBar color={"primary"} position={"sticky"}>
            <Toolbar>
                <IconButton
                    onClick={props.handleDrawerOpen}
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    variant={"h6"}
                    className={classes.title}
                >
                    <Link style={{color: 'white', textDecoration: 'none'}} to={paths.home}>
                        {Strings.app.name}
                    </Link>
                </Typography>
                {currentUser ?
                    (<div>{`Hello ${currentUser.email}`}</div>)
                    :
                    (<Stack direction={"row"}>
                        <Link to={paths.login} variant={"text"} style={{
                            color: 'white',
                            textDecoration: 'none',
                            marginRight: "8px"
                        }}>
                            {Strings.navBar.login}
                        </Link>
                        <Link to={paths.register}
                              variant={"text"}
                              style={{color: 'white', textDecoration: 'none'}}>
                            {Strings.navBar.register}
                        </Link>
                    </Stack>)
                }
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;