import React from 'react'
import './App.css'

import BookShelves from './BookShelves'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'

import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
    state = {
        books: {
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
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

            if (!oldShelf) {
                state.books[newShelf].push(book);
                return state
            }

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
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <BookShelves books={this.state.books} shelfChange={this.shelfChangeHandler} />
                        <div className="open-search">
                            <Link to='/search'>
                                <button>Add a book</button>
                            </Link>
                        </div>
                    </div>
                )} />
                <Route path='/search' render={() => (
                    <SearchBooks shelfChange={this.shelfChangeHandler} />
                )} />
            </div>
        )
    }
}

export default BooksApp
