import React from 'react'
import SearchBookBar from './SearchBooksBar';
import SearchBookResults from './SearchBooksResults';

const SearchBooks = (props) => {
    return (
        <div className="search-books">
            <SearchBookBar />
            <SearchBookResults />
        </div>
    )
}

export default SearchBooks;