import React, { Component } from 'react';

import Input from '../shared/Input';
import Button from '../shared/Button';

import './SearchForm.css';

class SearchForm extends Component {
  state = {
    searchText: '',
  }

  handleSearchTextChange = (event) => this.setState({ searchText: event.target.value });

  render() {
    const { searchText } = this.state;

    return (
      <div>
        <form className="SearchForm-form">
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
