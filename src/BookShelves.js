import React from 'react'

import BookShelf from './BookShelf'

const bookShelves = (props) => {
    const { currentlyReading, wantToRead, read } = props.books;
    const shelfChange = props.shelfChange;

    return (
        <div className="list-books-content">
            <div>
                <BookShelf key='currentShelf' shelfName='currentlyReading' books={currentlyReading} shelfChange={shelfChange} />
                <BookShelf key='wantShelf' shelfName='wantToRead' books={wantToRead} shelfChange={shelfChange} />
                <BookShelf key='readShelf' shelfName='read' books={read} shelfChange={shelfChange} />
            </div>
        </div>
    );
}

export default bookShelves;