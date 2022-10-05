import React, {useState} from 'react'
import {Button, Grid, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import { addProject } from '../../redux/project.slice'
import Strings from "../../resources/Strings";
import BaseLayout from "../BaseLayout";
import {useNavigate} from "react-router-dom";

const ProjectsForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [project, setProject] = useState({
        title: '',
        description: '',
        portfolio: '',
        sponsor: '',
        projectManager: '',
    });

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const addNewProject = (event) => {
        event.preventDefault()
        dispatch(addProject({
            ...project,
            id: Math.random()
        }))
        setTimeout(() => {
            navigate("/dashboard")
        }, 2000)

    }

    return(
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
                        onChange={ handleChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        margin="normal"
                        name={"portfolio"}
                        type={"text"}
                        label={Strings.projects.portfolio}
                        value={project.portfolio}
                        onChange={ handleChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        margin="normal"
                        name={"sponsor"}
                        type={"text"}
                        label={Strings.projects.sponsor}
                        value={project.sponsor}
                        onChange={ handleChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        margin="normal"
                        name={"projectManager"}
                        type={"text"}
                        label={Strings.projects.projectManager}
                        value={project.projectManager}
                        onChange={ handleChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        margin="normal"
                        name={"description"}
                        type={"text"}
                        multiline
                        label={"Project Description"}
                        value={project.description}
                        onChange={ handleChange}
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

    )
}

export default ProjectsForm;