import {useEffect, useState} from "react";
import {getProjectDocs} from '../../firebase/firebaseFunctions'
import MaterialReactTable from 'material-react-table';
import ProjectTableFormatter from "../../tableFormatters/ProjectTableFormatter";
import {Box, Typography} from "@mui/material";
import {useAuth} from "../../contexts/AuthContext";

const ProjectsList = () => {

    const {currentUser} = useAuth();
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

    return (
        <div>
            <MaterialReactTable
                columns={ProjectTableFormatter}
                data={projects}
                renderDetailPanel={({row}) => (
                    <Box
                        sx={{
                            display: 'grid',
                            margin: 'auto',
                            gridTemplateColumns: '1fr 1fr',
                            width: '100%',
                        }}
                    >
                    </Box>
                )}
            />
        </div>
    )
}

export default ProjectsList;