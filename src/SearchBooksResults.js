import React from 'react'

import Book from './Book'

const SearchBookResults = (props) => {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {props.books.map(book => (
                    <li key={book.id + 'list-item'}>
                        <Book key={book.id} book={book} shelfChange={props.shelfChange} />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default SearchBookResults;