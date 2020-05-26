import React, { Component } from 'react'

import SearchBookBar from './SearchBooksBar';
import SearchBookResults from './SearchBooksResults';

import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    state = {
        books: []
    }

    handleSubmit = (query) => {
        if (query.length > 0) {
            BooksAPI.search(query)
                .then(results => {
                    if (results.error) {
                        this.setState({ books: [] })
                    } else {
                        this.setState({ books: results })
                    }
                })
                .catch(e => {
                    console.log('error: ', e)
                })
        } else {
            this.setState({ books: [] });
        }
    }

    render() {
        return (
            <div className="search-books">
                <SearchBookBar handleSubmit={this.handleSubmit} />
                <SearchBookResults books={this.state.books} shelfChange={this.props.shelfChange} />
            </div>
        )
    }
}

export default SearchBooks;