import React, { Component } from 'react'

import SearchBookBar from './SearchBooksBar';
import SearchBookResults from './SearchBooksResults';

import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    state = {
        searchBooks: []
    }

    addShelfField(books) {
        // add shelf field to all books in search results
        if (books) {
            // flatten all books on current shelves into one array
            let shelvedBooks = Object.entries(this.props.books)
                .reduce((a, b) => (a.concat(b[1])), []);

            // check for match in shelved books, otherwise use 'none'
            return books.map(book1 => {
                let update = { ...book1, shelf: 'none' };
                shelvedBooks.forEach(book2 => {
                    if (book1.id === book2.id) {
                        update.shelf = book2.shelf;
                    }
                });
                return update;
            })
        }
    }

    handleSubmit = (query) => {
        // get query from search bar and call API, update state with results
        if (query.length > 0) {
            BooksAPI.search(query)
                .then(results => {
                    if (results.error) {
                        this.setState({ searchBooks: [] })
                    } else {
                        let updated = this.addShelfField(results)
                        this.setState({ searchBooks: updated })
                    }
                })
                .catch(e => {
                    console.log('error: ', e)
                })
        } else {
            this.setState({ searchBooks: [] });
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