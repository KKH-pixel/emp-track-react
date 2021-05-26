import React from "react";
import "./style.css";


function SearchForm(props) {
  const handleSubmit = (onSubmitEvent) => {
    onSubmitEvent.preventDefault();
  };
  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          onChange={props.onFilter}
          type="text"
          className="form-control"
          placeholder="Search"
        />
      </div>
    </form>
  );
}

export default SearchForm;