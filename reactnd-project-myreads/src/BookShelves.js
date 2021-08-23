import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

const shelves = [
  {
    title: 'Currently Reading',
    id: 'currentlyReading'
  }, {
    title: 'Want to Read',
    id: 'wantToRead'
  }, {
    title: 'Read',
    id: 'read'
  }
]

class BookShelves extends Component {

  render() {
    const { changeShelf, books } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf shelf={shelves[0]} books={books} changeShelf={changeShelf} />
            <Shelf shelf={shelves[1]} books={books} changeShelf={changeShelf} />
            <Shelf shelf={shelves[2]} books={books} changeShelf={changeShelf} />
          </div>
        </div>
        <div>
          <Link to='/search' className="open-search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelves;