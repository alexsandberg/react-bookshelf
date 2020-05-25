import React from 'react'

import BookDescription from './BookDescription'
import BookMenu from './BookMenu'

const book = (props) => {
    const { title, authors, imgURL } = props;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imgURL})` }}></div>
                <BookMenu />
            </div>
            <BookDescription title={title} authors={authors} />
        </div>
    );
}

export default book;