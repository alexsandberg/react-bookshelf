import React, { Component } from 'react'

class SearchBookBar extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        let val = event.target.value;
        this.setState(prevState => ({ value: val }));
    }

    render() {
        return (
            <div className="search-books-bar">
                <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(e) => this.handleChange(e)} />
                </div>
            </div>
        )
    }
}

export default SearchBookBar;