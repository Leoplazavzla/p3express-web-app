import React, {useEffect, useState} from 'react'
import BaseLayout from "../layouts/BaseLayout";
import {useAuth} from "../contexts/AuthContext";
import {useDispatch, useSelector} from "react-redux";
import {getRole} from "../redux/rolesSlice";
import {CircularProgress, Grid} from "@mui/material";
import {getProjectDocs} from "../firebase/firebaseFunctions";
import Strings from "../resources/Strings";
import CardComponent from '../components/CardComponent'
import {useLocalStorage} from "../hooks/useLocalStorage";

const Dashboard = () => {

    const {getUserRole, currentUser} = useAuth();
    const dispatch = useDispatch();
    const userRoleState = useSelector(state => state.roles)
    const [userRoleLocal, setUserRoleLocal] = useLocalStorage('userRole', '')

    const [userRole, setUserRole] = useState('');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const fetchedProjects = await getProjectDocs(currentUser.email)
            await setProjects(fetchedProjects)
            return fetchedProjects
        }
        fetchProjects().then(() => {
        })
    }, [currentUser])

    useEffect(() => {
        if (userRole) {
            dispatch(getRole(userRole))
        }
    }, [dispatch, userRole])

    useEffect(() => {
        if (currentUser) {
            const role = getUserRole(currentUser.uid).then((response) => {
                setUserRoleLocal(response)
                return setUserRole(response)
            })
        }
    }, [currentUser])

    return (
        <BaseLayout>
            <h1>Dashboard</h1>
            {userRoleLocal === '' ?
                <CircularProgress/>
                :
                <div>
                    <br/>
                    {userRoleLocal === 'consultant' ?
                        <div>
                            <Grid container>
                                {projects === [] ?
                                    <div></div>
                                    :
                                    <CardComponent
                                        title={Strings.projects.name}
                                        data={projects}
                                        role={userRoleLocal}
                                    />
                                }
                            </Grid>
                        </div>
                        :
                        <>
                            <Grid container>
                                {projects === [] ?
                                    <div></div>
                                    :
                                    <CardComponent
                                        title={Strings.projects.name}
                                        data={projects}
                                        role={userRoleLocal}
                                    />
                                }
                            </Grid>
                        </>
                    }
                </div>
            }
        </BaseLayout>
    )
}

export default Dashboard;