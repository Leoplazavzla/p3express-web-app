import React, {useEffect, useState} from 'react'
import paths from "../resources/paths";
import BaseLayout from "../layouts/BaseLayout";
import ButtonNew from "../components/buttons/ButtonNew";
import ProjectsList from "../layouts/projects/ProjectsList";
import {useAuth} from "../contexts/AuthContext";
import {useDispatch, useSelector} from "react-redux";
import {getRole} from "../redux/rolesSlice";
import {CircularProgress} from "@mui/material";


const Dashboard = () => {

    const {getUserRole, currentUser} = useAuth();
    const dispatch = useDispatch();
    const [userRole, setUserRole] = useState('');
    const userRoleState = useSelector(state => state.roles)

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
        <BaseLayout>
            <h1>Dashboard</h1>
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

        </BaseLayout>
    )
}

export default Dashboard;