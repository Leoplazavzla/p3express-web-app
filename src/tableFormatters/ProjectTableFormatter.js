
function ProjectTableFormatter() {
    return [
        {
            accessorKey: 'id',
            header: 'Project ID'
        },
        {
            accessorKey: 'title',
            header: 'Title'
        },
        {
            accessorKey: 'portfolio',
            header: 'Portfolio'
        },
        {
            accessorKey: 'sponsor',
            header: 'Sponsor'
        },
        {
            accessorKey: 'projectManager',
            header: 'Project Manager'
        },
        {
            accessorKey: 'description',
            header: 'Description'
        },

    ]
}

/*const columns = useMemo(() => [
        {
            accessorKey: 'title',
            header: 'Project Title'
        },
        {
            accessorKey: 'id',
            header: 'Project ID'
        },
        {
            accessorKey: 'description',
            header: 'Project Description'
        },

    ], [])*/

export default ProjectTableFormatter();