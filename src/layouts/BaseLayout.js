import React from 'react';
import {Paper} from "@mui/material";

const BaseLayout = ({children}) => {

    return (
        <Paper
            style={{padding: 50, margin: '0px 0'}}
            elevation={1}
        >
            {children}
        </Paper>
    );
}

export default BaseLayout;