import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import "./BookList.css";
import BookCard from "../BookCard/BookCard.js";
import Loader from "../Loader/Loader.js";
import { fetchMoreBooks } from "../../store/actions";

import { useDispatch, useSelector } from "react-redux";

export default function BooksList({ bookData }) {
  let buttonMore;

  const books = useSelector((state) => state.books);
  const searchParams = useSelector((state) => state.searchParams);
  const paginationLoader = useSelector(
    (state) => state.loading.paginationLoader
  );
  const dispatch = useDispatch();

  if (books.booksCount - books.booksItems.length <= 0) {
    buttonMore = (
      <Button variant="contained" disabled>
        No more
      </Button>
    );
  } else {
    buttonMore = (
      <Button onClick={addBooks} variant="outlined">
        Load more
      </Button>
    );
  }

  function addBooks() {
    if (books.booksCount - books.booksItems.length <= 0) {
      console.log("There are no books matching this search!!");
    } else if (books.booksCount - books.booksItems.length >= 30) {
      dispatch(fetchMoreBooks(books.booksItems.length, searchParams));
    } else if (books.booksCount - books.booksItems.length < 30) {
      dispatch(
        fetchMoreBooks(
          books.booksItems.length,
          searchParams,
          books.booksCount - books.booksItems.length
        )
      );
    }
  }

  return (
    <>
      {books.booksCount !== null ? (
        <section className="main-section">
          {books.booksCount ? (
            <main className="main-container">
              <>
                <div className="main-container__counter-container">
                  <p>Found {books.booksCount} results</p>
                </div>

                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={3}>
                    {books.booksItems.map((book, i) => {
                      return (
                        <BookCard
                          book={book}
                          openBookDescription={bookData}
                          key={i}
                        />
                      );
                    })}
                  </Grid>
                </Box>

                <div className="main-container__btn-container">
                  {paginationLoader ? <Loader /> : buttonMore}
                </div>
              </>
            </main>
          ) : (
            <Typography align="center" variant="h4" component="h4">
              Choose a book for yourself!
            </Typography>
          )}
        </section>
      ) : (
        <section className="main-section">
          <Typography align="center" variant="h4" component="h4">
            No books found for this query!
          </Typography>
        </section>
      )}
    </>
  );
}
