import {useEffect, useMemo, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import db from "../../firebase/firebaseConfig";
import MaterialReactTable from 'material-react-table';
import ProjectTableFormatter from "../../tableFormatters/ProjectTableFormatter";

const ProjectsList = () => {

    const [projects, setProjects] = useState([]);

    const getProjectDocs = async () => {
        const projectDocRef = await collection(db, 'projects')
        const docSnap = await getDocs(projectDocRef)
        return docSnap.docs.map(doc => ({...doc.data()}))
    }

    useEffect(() => {
        const fetchProjects = async() => {
            const fetchedProjects = await getProjectDocs()
            await setProjects(fetchedProjects)
            return fetchedProjects
        }
        fetchProjects().then(() => {})

    }, [])


    return(
        <div>
                <MaterialReactTable
                columns={ProjectTableFormatter}
                data={projects}
                />
        </div>
    )
}

export default ProjectsList;