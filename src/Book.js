import React from 'react'

import BookDescription from './BookDescription'
import BookMenu from './BookMenu'

const book = (props) => {
    return (
        <div>
            <p>book image</p>
            <BookDescription />
            <BookMenu />
        </div>
    );
}

export default book;