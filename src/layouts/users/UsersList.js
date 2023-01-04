import MaterialReactTable from "material-react-table";
import UserTableFormatter from "../../tableFormatters/UserTableFormatter";
import {useEffect, useState} from "react";

const UsersList = (props) => {
    console.log(props.userData)

    const [data, setData] = useState()

    return (
        <>
            {props && <MaterialReactTable columns={UserTableFormatter} data={props.userData} /> }

        </>
    )
}

export default UsersList;
