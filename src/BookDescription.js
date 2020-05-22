import React from 'react'

const bookDescription = (props) => {
    return (
        <div>
            <div className="book-title">{props.title || 'no title'}</div>
            <div className="book-authors">{props.authors || 'no authors'}</div>
        </div>
    );
}

export default bookDescription;