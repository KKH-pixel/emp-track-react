import React from "react";
import "./style.css";

function Header() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">Click on first or last name to sort. Type in search to filter results by last name.</p>
        </div>
      </div>
      );
    }
        
export default Header;    