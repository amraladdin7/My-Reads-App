import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'

class Book extends Component {
     state = {
          shelf: this.props.shelf,
          id: this.props.id
     }

     shelfChange = (value) => {
          this.setState({
               shelf: value
          }, () => {
               this.props.changeShelf(this.props, this.state.shelf)
          })
     }

     render() {
          const { book } = this.props;
          return (
               <div className="book">
                    <div className="book-top">
                         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                         <ShelfChanger shelfChange={this.shelfChange} shelf={this.state.shelf} />
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors.map((author, index) =>
                    (
                         <div key={index} className="book-authors">{author}</div>
                    )
                    )}
               </div>
          )
     }
}

export default Book;