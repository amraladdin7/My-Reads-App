import React from 'react';
import './App.css';
import BookShelves from './BookShelves';
import Search from './Search';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState(() => ({
          books
        }))
      }).catch(e =>
        alert(e)
      )
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    setTimeout(() => {
      BooksAPI.getAll()
        .then(books => this.setState(() => ({
          books
        })))
    }, 500);
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/'>
          <BookShelves books={this.state.books} changeShelf={this.changeShelf} />
        </Route>
        <Route path='/search'>
          <Search existingBooks={this.state.books} changeShelf={this.changeShelf} />
        </Route>
      </div>
    )
  }
}

export default BooksApp
