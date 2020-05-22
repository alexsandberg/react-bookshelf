import React from 'react'

import BookShelf from './BookShelf'

const bookShelves = (props) => {
    const { currentBooks, wantBooks, readBooks } = props;

    return (
        <div>
            <BookShelf shelfName='Currently Reading' books={currentBooks} />
            <BookShelf shelfName='Want to Read' books={wantBooks} />
            <BookShelf shelfName='Read' books={readBooks} />
        </div>
    );

}

export default bookShelves;