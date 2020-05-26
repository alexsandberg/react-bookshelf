import React from 'react'

import BookDescription from './BookDescription'
import BookMenu from './BookMenu'

const book = (props) => {
    const { title, authors, shelf } = props.book;
    const imgURL = props.book.imageLinks['thumbnail']

    const changeBookShelf = (newShelf) => {
        props.shelfChange(props.book, shelf, newShelf)
    }


    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imgURL})` }}></div>
                <BookMenu shelf={shelf} changeBookShelf={(shelf) => changeBookShelf(shelf)} />
            </div>
            <BookDescription title={title} authors={authors} />
        </div>
    );
}

export default book;