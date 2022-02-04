import React from "react";
import "./SearchByKeyword.css";

const SearchByKeyword = React.memo((props) => {
  return (
    <div>
      <input
        className="keyword-search-field"
        placeholder="Search By Keyword"
        type="text"
      />
    </div>
  );
});

export default SearchByKeyword;
