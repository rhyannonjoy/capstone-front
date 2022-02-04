import React from "react";
import "./SearchByTopic.css";

const SearchByTopic = React.memo((props) => {
  return (
    <div>
      <input
        className="topic-search-field"
        placeholder="Search By Topic"
        type="text"
      />
    </div>
  );
});

export default SearchByTopic;
