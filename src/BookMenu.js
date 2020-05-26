import React, { Component } from 'react'

class BookMenu extends Component {
    state = {
        value: ''
    }

    componentDidMount() {
        // set initial state from shelf prop
        this.setState({ value: this.props.shelf })
    }

    handleChange = (event) => {
        // pass new shelf value to handler and update state
        this.props.changeBookShelf(event.target.value);
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleChange} value={this.state.value}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookMenu;