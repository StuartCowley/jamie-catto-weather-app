import React from 'react';
import PropTypes from 'prop-types';

function SearchForm(props) {
    return (
        <div className="search-form">
            <input type="text"
            placeholder="Search..." />
            <button type="submit">Search</button>
        </div>
    )
}

export default SearchForm;