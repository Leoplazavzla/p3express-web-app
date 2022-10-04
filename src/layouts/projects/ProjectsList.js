import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

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

    console.log(projects)


    return(
        <div>
            {projects ?
                <div >
                    {projects.map(project => {
                        return (
                            <div key={project.id}>
                                <h1>{project.title}</h1>
                                <p>{project.description}</p>
                            </div>)
                    })}
                </div>
            :
            <div>No projects yet</div>
            }
        </div>
    )
}

export default ProjectsList;