import React, {Component} from 'react';
import Search from './Search.js'
import './css/search-results.css'


class SearchResults extends Component {

  render () {
    return (
      <div class="main">
        <h1>This will be the search results for {window.location.href.split('/')[4]}</h1>
      </div>
    )
  }
}

export default SearchResults
