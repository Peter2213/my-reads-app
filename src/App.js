import "./App.css";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import * as Api from './BooksApi'
import { useEffect, useState } from "react";
import BooksShalves from "./component/booksShalves";
import SearchBar from "./component/SearchBar";
function App() {

  const [responseData, SetResponseData] = useState([]);
  
  // response the data from the api 
  useEffect(()=>{
  Api.getAll().then((book) => SetResponseData(book))
  }
   , [])
   // handlig the ShelfBook for any book 
   const changeShelf = async(book , place) =>{
    await Api.update(book , place)
    await Api.getAll().then((r) => SetResponseData(r))
  }
  return (
    <div className="app">
        <div className="list-books">
          {/* making the routes */}
          <BrowserRouter>
          <Routes>
      <Route path="/" element={<BooksShalves responseData={responseData} changeShelf={changeShelf} />} />  
      <Route path="/search" element={<SearchBar  changeShelf={changeShelf} responseData={responseData}/>} /> 
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;