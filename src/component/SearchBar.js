import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Api from '../BooksApi'
import BookTemp from './bookTemp'
const SearchBar = ({changeShelf , responseData}) => {  
  const[input , setInput] = useState("")
  const[searchData , setSearchData] = useState([]);
  useEffect(()=>{
    // response Search Data 
    if(input) {
     Api.search(input).then(data => {
        if(data.error){
        setSearchData([])
      }
      else{
        // Handling Status
        setSearchData(data.map(bookData =>{
        responseData.forEach(data =>{
         if(bookData.id === data.id){
           bookData.shelf = data.shelf
         }})
        return bookData ;
       }))         
      }})
    }
else{
  setSearchData([])
    }  
   },[input , responseData]) 
          return (
    <div>       
        <div className="search-books">
    <div className="search-books-bar">
      
      <Link to="/"><div
        className="close-search"
      ></div>
        </Link>
      
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
             {searchData.map(dataSearch=> (
           <BookTemp b={dataSearch} changeShelf={changeShelf} key={dataSearch.id}/>
        ))}
        </ol>
    </div>
  </div>
  </div>
  )
}
export default SearchBar;