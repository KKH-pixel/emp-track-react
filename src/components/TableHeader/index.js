import React from "react";

class TableHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col" onClick={() => this.props.onHeaderClick("First Name")}>First Name</th> 
                <th scope="col" onClick={() => this.props.onHeaderClick("Last Name")}>Last Name</th> 
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">DoB</th>
                </tr>
            </thead>
        );
    }   
}

export default TableHeader;