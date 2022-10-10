import ProjectsList from "../../layouts/projects/ProjectsList";
import {useDispatch, useSelector} from "react-redux";
import {CircularProgress} from "@mui/material";
import ButtonNew from "../../components/buttons/ButtonNew";
import paths from "../../resources/paths";
import React, {useEffect, useState} from "react";
import {getRole} from "../../redux/rolesSlice";
import {useAuth} from "../../contexts/AuthContext";

const ProjectsTable = () => {

    const userRoleState = useSelector(state => state.roles);
    const dispatch = useDispatch();
    const {currentUser, getUserRole} = useAuth();
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        if(userRole){
            dispatch(getRole(userRole))
        }
    }, [dispatch, userRole])

    useEffect(() => {
        if(currentUser){
            const role = getUserRole(currentUser.uid).then((response) => {
                return setUserRole(response)
            })
        }

    }, [currentUser])


    return (
        <>
            <h2>Projects List</h2>
            {userRoleState.role === '' ?
                <CircularProgress/>
                :
                <div>
                    {userRoleState.role === 'consultant' ?
                        <div></div>
                        :
                        <>
                            <ButtonNew
                                path={paths.projects.newProject}
                                title={"Create new project"}
                            />
                        </>
                    }
                    <ProjectsList/>
                </div>

    }
        </>
        )
}

export default ProjectsTable;