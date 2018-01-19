import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../shared/Input';
import Button from '../shared/Button';

import './SearchForm.css';

class SearchForm extends Component {
  static propTypes = {
    onFilter: PropTypes.func,
  };

  static defaultProps = {
    onFilter: () => {},
  };

  state = {
    searchText: '',
  }

  handleSearchTextChange = event =>
    this.setState({ searchText: event.target.value });

  handleFilter = (event) => {
    event.preventDefault();
    this.props.onFilter(this.state.searchText);
  }

  render() {
    const { searchText } = this.state;

    return (
      <div>
        <form className="SearchForm-form" onSubmit={this.handleFilter}>
          <Input
            className="SearchForm-input"
            onChange={this.handleSearchTextChange}
            placeholder="Search..."
            type="text"
            value={searchText}
          />
          <Button className="SearchForm-button">
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
