import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


function Customer(props) {
    return (
        <TableRow>
            <TableCell align="center">{props.id}</TableCell>
            <TableCell align="center"><img src={props.image} alt="profile" /></TableCell>
            <TableCell align="center">{props.name}</TableCell>
            <TableCell align="center">{props.birthday}</TableCell>
            <TableCell align="center">{props.gender}</TableCell>
            <TableCell align="center">{props.email}</TableCell>
        </TableRow>
    );
}

function CustomerProfile(props) {
    return (
        <div>
            <p>{props.id}</p>
            <img src={props.image} alt="profile" />
            <p>{props.name}</p>
        </div>
    );
}

function CustomerInfo(props) {
    return (
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default Customer;