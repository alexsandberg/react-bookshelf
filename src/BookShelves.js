import React from 'react'

import BookShelf from './BookShelf'

const bookShelves = (props) => {
    const { currentlyReading, wantToRead, read } = props.books;

    return (
        <div>
            <BookShelf key='currentShelf' shelfName='Currently Reading' books={currentlyReading} />
            <BookShelf key='wantShelf' shelfName='Want to Read' books={wantToRead} />
            <BookShelf key='readShelf' shelfName='Read' books={read} />
        </div>
    );
}

export default bookShelves;