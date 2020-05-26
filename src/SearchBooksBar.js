import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SearchBookBar extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        // search database and update state on change
        let val = event.target.value;
        this.props.handleSubmit(event.target.value);
        this.setState(prevState => ({ value: val }));
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link to='/'>
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(e) => this.handleChange(e)} />
                </div>
            </div>
        )
    }
}

export default SearchBookBar;