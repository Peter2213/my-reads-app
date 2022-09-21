import React from 'react'
import BookShelf from '../component/bookShelf';
import { Link } from 'react-router-dom';

const BooksShalves = ({responseData, changeShelf}) => {
  let currently , want , read = [];
  currently = responseData.filter(b => b.shelf === 'currentlyReading')
   want = responseData.filter(b => b.shelf === 'wantToRead')
   read = responseData.filter(b => b.shelf === 'read')
  return(


    // ---------------Header-------------- //

    <div className='main'>
    <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
    <BookShelf  address="currently reading" section={currently} changeShelf={changeShelf} />
    <BookShelf  address="want to read" section={want} changeShelf={changeShelf} />
    <BookShelf  address="read" section={read} changeShelf={changeShelf} />

              {/* -----------button------------ */}
              
              <div className="open-search">
              <Link to="search"><div>Add a book</div></Link>
                </div>
          </div>         
  );
}
export default BooksShalves;