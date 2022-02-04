import React from "react";
import "./SearchByDate.css";

const SearchByDate = React.memo((props) => {
  return (
    <div>
      <input
        className="date-search-field"
        placeholder="Search By Date"
        type="text"
      />
    </div>
  );
});

export default SearchByDate;
