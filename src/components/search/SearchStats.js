import React from 'react';

const SearchStats = props => {
  if (props.numberOfSearchResults) {
    return (
      <div className="center-align search-stats">
        <h4>{props.numberOfSearchResults} results for '{props.searchQuery}'</h4>
      </div>
    )
  } else {
    return null
  }
}

export default SearchStats;
