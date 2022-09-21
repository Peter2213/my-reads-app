import React from 'react'
import BookTemp from './bookTemp';
const BookShelf = ({address , section , changeShelf }) => {
  return (  
    <div className="list-books-content">
                        <div className="bookshelf">
                <h2 className="bookshelf-title">{address}</h2>
                <div className="bookshelf-books">
                  <ol className='books-grid'>
                    {section.map(b=> (  
                     <BookTemp b={b} changeShelf={changeShelf} key={b.id}/>
                     ))}
                     </ol>
              </div>
          </div>
         </div>
          )      
     }
export default BookShelf;