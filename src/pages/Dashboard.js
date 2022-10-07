import React, {useEffect, useState} from 'react'
import paths from "../resources/paths";
import BaseLayout from "../layouts/BaseLayout";
import ButtonNew from "../components/buttons/ButtonNew";
import ProjectsList from "../layouts/projects/ProjectsList";
import {useAuth} from "../contexts/AuthContext";


const Dashboard = () => {

    const {getUserRole, currentUser} = useAuth();
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        if(currentUser){
            const role = getUserRole(currentUser.uid).then((response) => {
                return setUserRole(response)
            })
        }

    }, [currentUser])

        console.log(userRole)
    return (
        <BaseLayout>
            <h1>Dashboard</h1>
            {userRole === 'consultant' ?
                <div></div>
                :
                <ButtonNew
                    path={paths.projects.newProject}
                    title={"Create new project"}
                />
            }

            <ProjectsList/>
        </BaseLayout>
    )
}

export default Dashboard;