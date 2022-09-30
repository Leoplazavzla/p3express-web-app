import React, {useState} from 'react'
import {Button, Grid, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {getProjectDescription, getProjectName} from '../../redux/project.slice'
import Strings from "../../resources/Strings";
import BaseLayout from "../BaseLayout";

const ProjectsForm = () => {
    const dispatch = useDispatch();
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const addNewProject = (event) => {
        event.preventDefault()
        dispatch(getProjectName({
            projectTitle: projectTitle,

        }))
        dispatch(getProjectDescription({
            projectDescription: projectDescription
        }))


    }

    return(
        <BaseLayout>
            <Grid>
                <h3>New Project</h3>
                <Grid item>
                    <TextField
                        type={"name"}
                        label={"Project Title"}
                        value={projectTitle}
                        onChange={ (e) => setProjectTitle(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        type={"text"}
                        multiline
                        label={"Project Description"}
                        value={projectDescription}
                        onChange={ (e) => setProjectDescription(e.target.value)}
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