import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

function Table() {
    return (
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DoB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"></th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                {/* <tr>
                <th scope="row"></th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row"></th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr> */}
            </tbody>
        </table>
    );
}
    
export default Table;