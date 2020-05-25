import React from 'react'

import Book from './Book'

const bookShelf = (props) => {
    const books = props.books;
    const shelfName = props.shelfName;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id + 'list-item'}>
                            <Book key={book.id} title={book.title} authors={book.authors} imgURL={book.imageLinks['thumbnail']} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default bookShelf;