import React from 'react'

import BookShelf from './BookShelf'

const bookShelves = (props) => {
    const { currentlyReading, wantToRead, read } = props.books;

    return (
        <div className="list-books-content">
            <div>
                <BookShelf key='currentShelf' shelfName='currentlyReading' books={currentlyReading} />
                <BookShelf key='wantShelf' shelfName='wantToRead' books={wantToRead} />
                <BookShelf key='readShelf' shelfName='read' books={read} />
            </div>
        </div>
    );
}

export default bookShelves;