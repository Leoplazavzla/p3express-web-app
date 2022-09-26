import React from 'react'
import {Route, Routes} from 'react-router-dom'
import paths from "./resources/paths";

//pages
import Home from "./pages/Home";
import GanttChart from "./pages/GanttChart";
import KanbanBoard from "./pages/KanbanBoard";
import Dashboard from "./pages/Dashboard";


const AppRoutes = () => {
    return(
        <Routes>
                <Route exact path={paths.home} element={<Home/>} />
                <Route path={paths.ganttChart} element={<GanttChart/>} />
                <Route path={paths.kanban} element={<KanbanBoard/>} />
                <Route path={paths.dashboard} element={<Dashboard/>} />
        </Routes>
    )
}

export default AppRoutes;