import React, {Component} from 'react';
import './css/Search-results.css'


class SearchResults extends Component {

  render () {
    return (
      <div className="main">
        <h1>This will be the search results for {window.location.href.split('/')[4]}</h1>
      </div>
    )
  }
}

export default SearchResults
