import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
  render() {
    const { changeShelf, shelf, books } = this.props;
    const shelfBooks = books.filter((b) => b.shelf === shelf.id);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks.map(book => (
              <li key={book.id} >
                <Book book={book} shelf={book.shelf} id={book.id} changeShelf={changeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;