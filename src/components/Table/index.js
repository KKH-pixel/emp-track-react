import React from "react";
import TableHeader from "../TableHeader";
// import "./style.css";

class Table extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
    return (
        <table className="table table-hover">
            <TableHeader onHeaderClick={this.props.onSort} />
            <tbody>
                {
                this.props.employees.map ( employee => {
                    return(
                        <tr key={employee.id.value}>
                            <td><img src={employee.picture.thumbnail} /></td>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.dob.date.split("T")[0]}</td>
                        </tr>
                    )}
                    )
                }
            </tbody>
        </table>
    );
}
}
    
export default Table;