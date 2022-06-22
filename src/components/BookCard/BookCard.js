import React from "react";
import "./BookCard.css";
import { Grid } from "@mui/material";
import { cutString } from "../../utils/common"

export default function BookCard({ book, openBookDescription }) {
  function sendBook() {
    openBookDescription(book);
  }

  const cardImage = book.volumeInfo.imageLinks
      ? book.volumeInfo.imageLinks.thumbnail
      : "https://redbytesite.com/wp-content/uploads/woocommerce-placeholder-600x600.png";
  const categories = book.volumeInfo?.categories?.slice(0,1);
  const title = cutString(book.volumeInfo?.title, 80);
  const author = book.volumeInfo?.authors?.slice(0,1);

  return (
    <Grid className="book-card-item" item xl={3} lg={3} md={6} sm={12} xs={12} onClick={sendBook}>
      <div className="book-card">
        <img
          className="book-card__img"
          src={cardImage}
          alt="book"
        />
        <p className="book-card__categories">
          {categories}
        </p>
        <h5 className="book-card__title">{title}</h5>
        <p className="book-card__authors">{author}</p>
      </div>
    </Grid>
  );
}
