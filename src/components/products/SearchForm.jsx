import React from 'react';
import PropTypes from 'prop-types';

import Input from '../shared/Input';
import Button from '../shared/Button';

import './SearchForm.css';

const SearchForm = ({ onSearchTextChange, searchText, ...other }) => (
  <div {...other}>
    <form className="SearchForm-form">
      <Input
        className="SearchForm-input"
        onChange={onSearchTextChange}
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

SearchForm.propTypes = {
  onSearchTextChange: PropTypes.func,
  searchText: PropTypes.string,
};

SearchForm.defaultProps = {
  onSearchTextChange: () => {},
  searchText: '',
};

export default SearchForm;
