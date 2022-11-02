import MaterialReactTable from "material-react-table";
import UserTableFormatter from "../../tableFormatters/UserTableFormatter";

const UsersList = () => {
    return (
        <>
            <MaterialReactTable columns={UserTableFormatter} data={[]} />
        </>
    )
}

export default UsersList;
