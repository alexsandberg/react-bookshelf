import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import BookShelves from './BookShelves'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
    state = {
        books: {
            currentlyReading: [],
            wantToRead: [],
            read: []
        },
        showSearchPage: false
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(res => {
                let books = {};
                res.forEach(book => {
                    if (!books[book.shelf]) {
                        books[book.shelf] = [book];
                    }
                    else {
                        books[book.shelf].push(book);
                    }
                })
                return books;
            })
            .then(books => {
                this.setState(() => ({
                    books: books
                }))
            })
    }

    shelfChangeHandler = (book, oldShelf, newShelf) => {
        this.setState(prevState => {
            const state = { ...prevState }

            // remove book from current shelf
            let index = state.books[oldShelf].indexOf(book);
            state.books[oldShelf].splice(index, 1);

            // change shelf on book
            book.shelf = newShelf

            // add book to new shelf
            if (newShelf !== 'none') {
                state.books[newShelf].push(book);
            }

            return state
        })
    }

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                            <div className="search-books-input-wrapper">
                                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                                <input type="text" placeholder="Search by title or author" />

                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                ) : (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <BookShelves books={this.state.books} shelfChange={this.shelfChangeHandler} />
                            <div className="open-search">
                                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}

export default BooksApp
