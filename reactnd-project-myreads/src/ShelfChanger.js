import React, { Component } from 'react';

class ShelfChanger extends Component {
     handleChange = (e) => {
          const value = e.target.value;
          this.props.shelfChange(value)
     }
     render() {
          return (
               <div className="book-shelf-changer">
                    <select onChange={this.handleChange} value={this.props.shelf}>
                         <option value="move" disabled>Move to...</option>
                         <option value="none">None</option>
                         <option value="currentlyReading">Currently Reading</option>
                         <option value="wantToRead">Want to Read</option>
                         <option value="read">Read</option>
                    </select>
               </div>
          )
     }
}

export default ShelfChanger;