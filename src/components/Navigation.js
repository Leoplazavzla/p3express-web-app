import React, {useState} from "react";
import NavBar from "./navbar/NavBar";
import {makeStyles} from "@mui/styles";
import NavigationDrawer from "./drawer/NavigationDrawer";
import AppRoutes from "../AppRoutes";


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240
        }

    },
}));

const Navigation = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(!open)
    }

    return (
            <>
                <NavBar
                    handleDrawerOpen={handleDrawerOpen}
                />
                <NavigationDrawer
                    variant={"persistent"}
                    open={open}
                    closeDrawer={handleDrawerOpen}
                />

                <div >
                    <main className={classes.content}>
                        <AppRoutes/>
                    </main>
                </div>
            </>
    )
}
export default Navigation;