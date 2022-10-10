import React, {useEffect, useState} from 'react'
import paths from "../resources/paths";
import BaseLayout from "../layouts/BaseLayout";
import ButtonNew from "../components/buttons/ButtonNew";
import {useAuth} from "../contexts/AuthContext";
import {useDispatch, useSelector} from "react-redux";
import {getRole} from "../redux/rolesSlice";
import {Card, CardContent, CardHeader, CircularProgress, Grid} from "@mui/material";
import {getProjectDocs} from "../firebase/firebaseFunctions";

const Dashboard = () => {

    const {getUserRole, currentUser} = useAuth();
    const dispatch = useDispatch();
    const userRoleState = useSelector(state => state.roles)

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

    }, [])

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
                    <Grid container>
                        <Grid item xs={4}>
                            <Card>
                                <CardHeader title={"Projects"} component={"h3"}/>
                                <CardContent>
                                    {`${projects.length} projects`}
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                    <br/>

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
                </div>
            }
        </BaseLayout>
    )
}

export default Dashboard;