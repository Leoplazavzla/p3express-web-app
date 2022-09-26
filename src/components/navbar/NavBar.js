import React from "react";
import {Menu as MenuIcon} from "@mui/icons-material"
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Strings from "../../resources/Strings"
import paths from "../../resources/paths"
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]:{
            }
        },
        title: {
            flexGrow: 1
        },
        appBar: {
            [theme.breakpoints.up('sm')]:{
                width: `calc(100% - ${240}px)`,
                marginLeft: 240
            }
        },
        toolbar: theme.mixins.toolbar,
    })
)


const NavBar = (props) => {
    console.log(Strings.app.name)
    const classes = useStyles();

    return (

        <AppBar   color={"primary"} position={"sticky"}>
            <Toolbar>
                <IconButton onClick={props.handleDrawerOpen} className={classes.menuButton} color="inherit" aria-label="Menu">
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


            </Toolbar>
        </AppBar>
    )
}

export default NavBar;