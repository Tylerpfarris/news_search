import React from 'react'
import PropTypes from 'prop-types'

const Search = ({queryParams, onQueryParamsChange, onSubmit}) => (
    <form onSubmit={onSubmit}>
        <label htmlFor='query-search'>Search New Articles</label>
        <input
            id='query-search'
            type="text"
            value={queryParams}
            onChange={onQueryParamsChange}
        />
        <button aria-label='search-articles'>Search</button>
    </form>
)
Search.propTypes = {
    queryParams: PropTypes.string.isRequired,
    onQueryParamsChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Search
