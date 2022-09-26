import React from 'react'
import {Link} from "react-router-dom";
import paths from "../resources/paths";
import BaseLayout from "../layouts/BaseLayout";
import ButtonNew from "../components/buttons/ButtonNew";

const Dashboard = () => {
    return(
        <BaseLayout>
            <h1>Dashboard</h1>
            <ButtonNew
            path={paths.projects.newProject}
            title={"Create new project"}
            />
        </BaseLayout>
    )
}

export default Dashboard;