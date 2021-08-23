import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
class Search extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    let updatedBooks = [];
    this.setState(() => {
      setTimeout(()=>{},500);
      return ({
      query: query.trim()
    })}, () => { 
      updatedBooks = [];
      if (this.state.query !== '') {
      BooksAPI.search(this.state.query)
        .then(books => {
          if (books && books[0]) {
            books.forEach(b => {
              this.props.existingBooks.forEach(book => {
                if(book.id === b.id) {
                  b = {...b, shelf: book.shelf};
                }
              });
                updatedBooks.push(b);
            })
            this.setState({
              books: updatedBooks
            })
          }
        })
    }})
    updatedBooks.splice(0, updatedBooks.length);
  }



  render() {
    const { changeShelf } = this.props;
    const { books, query } = this.state;
    const showing = query === ''
      ? []
      : books;
    const searchBooks = showing
      ? showing.filter((b) => (b.authors && b.imageLinks && b.imageLinks.thumbnail))
      : [];
    const searched = searchBooks.filter((b) => (b.title.toLowerCase().includes(this.state.query.toLowerCase()) || (b.authors.join(' ').toLowerCase().includes(this.state.query.toLowerCase()))));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => {
                this.updateQuery(event.target.value) 
              }} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searched.map(book => (
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

export default Search;