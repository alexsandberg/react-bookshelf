import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import BookShelves from './BookShelves'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
    state = {
        books: {
            currentlyReading: [],
            wantToRead: [],
            read: []
        },
        showSearchPage: true
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
                    <SearchBooks />
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
