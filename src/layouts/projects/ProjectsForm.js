import React, {useEffect, useState} from 'react'
import {Button, Grid, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import paths from '../../resources/paths'
import Strings from "../../resources/Strings";
import BaseLayout from "../BaseLayout";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";
import {addProject} from '../../firebase/firebaseFunctions'

const ProjectsForm = () => {
    const {currentUser} = useAuth();
    const userRoleState = useSelector(state => state.roles)
    //const dispatch = useDispatch();
    const navigate = useNavigate();
    const [project, setProject] = useState({
        title: '',
        portfolio: '',
        sponsor: '',
        projectManager: '',
    });

    useEffect(() => {
        console.log(userRoleState)
    }, [userRoleState])

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const addNewProject = async (event) => {
        event.preventDefault()
        await addProject(currentUser.email, project)

        setTimeout(() => {
            navigate(paths.projects.list)
        }, 2000)
    }
    console.log(userRoleState)

    return (

        <>{userRoleState.role}</>
        /*{userRoleState.role === 'consultant' ?
        <div>No data</div>
        :
            <BaseLayout>
                <Grid>
                    <Typography component={"h3"}>
                        {Strings.projects.new}
                    </Typography>
                    <Grid item>
                        <TextField
                            margin="normal"
                            name={"title"}
                            type={"name"}
                            label={Strings.projects.title}
                            value={project.title}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            margin="normal"
                            name={"portfolio"}
                            type={"text"}
                            label={Strings.projects.portfolio}
                            value={project.portfolio}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            margin="normal"
                            name={"sponsor"}
                            type={"text"}
                            label={Strings.projects.sponsor}
                            value={project.sponsor}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            margin="normal"
                            name={"projectManager"}
                            type={"text"}
                            label={Strings.projects.projectManager}
                            value={project.projectManager}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            margin="normal"
                            variant={"contained"}
                            onClick={(event) => addNewProject(event)}
                        >
                            {Strings.projects.create}
                        </Button>
                    </Grid>
                </Grid>
            </BaseLayout>
        }*/

    )
}

export default ProjectsForm;