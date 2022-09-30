import React from 'react'
import {Route, Routes} from 'react-router-dom'
import paths from "./resources/paths";

//pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import ProjectsForm from "./layouts/projects/ProjectsForm";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppRoutes = () => {
    return(
        <Routes>
                <Route exact path={paths.home} element={<Home/>} />
                <Route exact path={paths.login} element={<Login/>} />
                <Route exact path={paths.register} element={<Register/>} />
                <Route path={paths.dashboard} element={<Dashboard/>} />
                <Route path={paths.projects.newProject} element={<ProjectsForm/>} />
                <Route path={"*"} element={<ErrorPage/>} />
        </Routes>
    )
}

export default AppRoutes;