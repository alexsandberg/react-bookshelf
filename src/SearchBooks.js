import React, { Component } from 'react'

import SearchBookBar from './SearchBooksBar';
import SearchBookResults from './SearchBooksResults';

import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    state = {
        books: []
    }

    addShelfField(books) {
        if (books) {
            // flatten all books on current shelves into one array
            let shelvedBooks = Object.entries(this.props.books)
                .reduce((a, b) => (a.concat(b[1])), []);

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
        if (query.length > 0) {
            BooksAPI.search(query)
                .then(results => {
                    if (results.error) {
                        this.setState({ books: [] })
                    } else {
                        let updated = this.addShelfField(results)
                        this.setState({ books: updated })
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