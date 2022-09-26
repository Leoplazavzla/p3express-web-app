import React from 'react'
import {Route, Routes} from 'react-router-dom'
import paths from "./resources/paths";

//pages
import Home from "./pages/Home";
import GanttChart from "./pages/GanttChart";


const AppRoutes = () => {
    return(
        <Routes>
            <Route exact path={paths.home} element={<Home/>} />
            <Route exact path={paths.ganttChart} element={<GanttChart/>} />

        </Routes>
    )
}

export default AppRoutes;