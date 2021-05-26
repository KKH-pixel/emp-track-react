import axios from "axios";
import React from "react";
import "./App.css";
import Table from "./components/Table";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {employees: [], filteredEmployees: []};
  }

  componentDidMount = async () => {
    const response = await axios.get(
      "https://randomuser.me/api/?results=20&nat=us"
    );
    const results = response.data.results;
    this.setState({ employees: results, filteredEmployees: results });
  };

  handleFilter = (onChangeEvent) => {
    // console.log(onChangeEvent.target.value);
    onChangeEvent.preventDefault();
    const filterText = onChangeEvent.target.value;

    if (!filterText) {
      this.setState({filteredEmployees: this.state.employees});
      return;
    }

    let filtered = this.state.employees.filter( (employee) => {
      return employee.name.last.toLowerCase().startsWith(filterText.toLowerCase());
    });
    this.setState({filteredEmployees: filtered});
  };

  handleSort = (field) => {
    let employees = this.state.filteredEmployees.slice();
    let sorted = employees.sort((a, b) => {
        let left, right;
        switch (field) {
            case "First Name": 
                left = a.name.first.toLowerCase();
                right = b.name.first.toLowerCase();
                break;
            case "Last Name": 
                left = a.name.last.toLowerCase();
                right = b.name.last.toLowerCase();
                break;
        
            default:
                break;
        }
        if (left < right) {
            return -1;
        }
        if (left > right) {
            return 1;
        }
        return 0;
    });
    this.setState({filteredEmployees: sorted});
  };

  render = () => {
    return (
      <div>
        <Header></Header>
        <SearchForm onFilter={this.handleFilter}></SearchForm>
        <Table employees={this.state.filteredEmployees} onSort={this.handleSort}></Table>
      </div>
    );
  };
}

export default App;
