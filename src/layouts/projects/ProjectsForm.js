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
        description: ''
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
                    {Strings.login.name}
                </Typography>
                <Grid item>
                    <TextField
                        name={"title"}
                        type={"name"}
                        label={"Project Title"}
                        value={project.title}
                        onChange={ handleChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
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