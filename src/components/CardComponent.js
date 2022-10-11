import {Link} from "react-router-dom";
import {Button, Card, CardContent, CardHeader, Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import paths from "../resources/paths";
import Strings from "../resources/Strings";

const CardComponent = (props) => {

    const cardType = props.title
    const [firstButtonPath, setFirstButtonPath] = useState('');
    const [firstButtonText, setFirstButtonText] = useState('');
    const [secondButtonPath, setSecondButtonPath] = useState('');
    const [secondButtonText, setSecondButtonText] = useState('');

    useEffect(() => {
        if(cardType === 'Projects' ){
            setFirstButtonPath(paths.projects.list)
            setFirstButtonText(Strings.projects.viewProjects)
            setSecondButtonPath(paths.projects.newProject)
            setSecondButtonText(Strings.projects.create)
        }else if(cardType === 'Portfolio'){
            setFirstButtonPath(paths.portfolios.list)
            setFirstButtonText(Strings.portfolios.viewPortfolios)
            setSecondButtonPath(paths.portfolios.newPortfolio)
            setSecondButtonText(Strings.portfolios.create)
        }else{
            setFirstButtonPath(paths.users.list)
            setFirstButtonText(Strings.users.viewUsers)
            setSecondButtonPath(paths.users.newUser)
            setSecondButtonText(Strings.users.create)
        }

    }, [cardType])

    return (
        <>
            {props.data &&
                <Grid item xs={4}>
                    <Card>
                        <CardHeader title={props.title} component={"h3"}/>
                        <CardContent>
                            {`${props.data.length} projects`}
                        </CardContent>

                        {props.role === 'consultant' ?
                            <Button
                                fullWidth
                                component={Link}
                                to={firstButtonPath}
                                variant={"contained"}
                            >
                                {firstButtonText}
                            </Button>
                            :
                            <div style={{display: "flex"}}>
                                <Button
                                    component={Link}
                                    to={firstButtonPath}
                                    variant={"contained"}
                                >
                                    {firstButtonText}
                                </Button>
                                <Button
                                    component={Link}
                                    to={secondButtonPath}
                                    variant={"contained"}
                                >
                                    {secondButtonText}
                                </Button>
                            </div>
                        }
                    </Card>
                </Grid>
            }
        </>
    )
}

export default CardComponent;