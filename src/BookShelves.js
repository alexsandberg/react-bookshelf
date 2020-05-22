import React, { Component } from 'react'

import BookShelf from './BookShelf'

class BookShelves extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <BookShelf />
                <BookShelf />
                <BookShelf />
            </div>
        );
    }
}

export default BookShelves;