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
        this.getAllBooks();
    }

    getAllBooks() {
        // call BooksAPI and set state with results
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

    shelfChangeHandler = (book, newShelf) => {
        // update book in database
        BooksAPI.update(book, newShelf)
            .then(res => this.getAllBooks())
            .catch(error => console.log('update error: ', error));
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
                    <SearchBooks shelfChange={this.shelfChangeHandler} books={this.state.books} />
                )} />
            </div>
        )
    }
}

export default BooksApp
