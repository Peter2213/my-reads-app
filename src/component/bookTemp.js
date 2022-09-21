import React from 'react'
const BookTemp = ({b , changeShelf }) => { 
  return (
      <li> 
       <div className="book">    
                         <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage :
                              b.imageLinks ? 
                              `url(${b.imageLinks.smallThumbnail})` :
                              ""
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                            <select  onChange={(event) => changeShelf(b , event.target.value)} defaultValue={b.shelf ? b.shelf : "none"}>
                              <option value="" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">want to read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{b.title}</div>
                        <div className="book-authors">{b.authors}</div>
                      </div>
              </li>
  )
}
export default BookTemp