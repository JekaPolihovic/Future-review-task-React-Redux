import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BooksList from "../BooksList/BooksList";
import Loader from "../Loader/Loader.js";
import React, { useState } from "react";
import BookDescription from "../BookDescription/BookDescription";
import { useSelector } from "react-redux";

function App() {
  const [bookData, setBookData] = useState(false);
  const [showBookData, setShowBookData] = useState(false);
  const searchLoader = useSelector((state) => state.loading.searchLoader);

  function sendBookData(e) {
    setShowBookData(true);
    setBookData(e);
  }

  function closeShowBook() {
    setShowBookData(false);
    setBookData(false);
  }

  return (
    <div className="App">
      <AppHeader />

      {showBookData && (
        <BookDescription book={bookData} closeShowBook={closeShowBook} />
      )}

      {searchLoader && <Loader />}
      {!showBookData && !searchLoader && <BooksList bookData={sendBookData} />}
    </div>
  );
}

export default App;
