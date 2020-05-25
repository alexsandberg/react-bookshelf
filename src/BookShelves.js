import React from 'react'

import BookShelf from './BookShelf'

const bookShelves = (props) => {
    const { currentlyReading, wantToRead, read } = props.books;

    return (
        <div className="list-books-content">
            <div>
                <BookShelf key='currentShelf' shelfName='Currently Reading' books={currentlyReading} />
                <BookShelf key='wantShelf' shelfName='Want to Read' books={wantToRead} />
                <BookShelf key='readShelf' shelfName='Read' books={read} />
            </div>
        </div>
    );
}

export default bookShelves;