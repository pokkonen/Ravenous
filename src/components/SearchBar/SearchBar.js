import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }

    this.handleTermChange =     this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch =         this.handleSearch.bind(this);
    this.checkKey = this.checkKey.bind(this);
  }

  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption});
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
    //LocationSearchInput();
  }

// Allows to search by pressing Enter
  checkKey(e) {
    if (e.keyCode === 13) {
      this.handleSearch(e)
    }
  }

  handleSearch(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li
                key={sortByOptionValue}
                className={this.getSortByClass(sortByOptionValue)}
                onClick={ this.handleSortByChange.bind(this, sortByOptionValue) }>
              {sortByOption}</li>
    });
  }
  render() {
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul onClick={this.handleSearch}> {/* Clicking on different sortin options automatically requiries Yelp */}
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div type="submit" className="SearchBar-fields">
          <input onKeyDown={this.checkKey} onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onKeyDown={this.checkKey} onChange={this.handleLocationChange} placeholder="Where?" />
      </div>
        <div className="SearchBar-submit">
          <button className="button" disabled={!this.state.location} onClick={this.handleSearch}>Let's Go</button>
        </div>
      </div>
    )
  }
}

export default SearchBar;
