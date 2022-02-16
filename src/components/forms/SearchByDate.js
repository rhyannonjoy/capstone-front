import React from "react";
import "./SearchByDate.css";
import SearchIcon from "@material-ui/icons/Search";

const SearchByDate = React.memo((props) => {
  return (
    <div className="search">
      <div className="search-inputs">
        <input
          className="date-search-field"
          placeholder="Search By Date"
          type="text"
        ></input>
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
});

export default SearchByDate;
