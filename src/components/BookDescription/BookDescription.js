import React from "react";
import "./BookDescription.css";
import { Button } from "@mui/material";

export default function BookDescription({ book, closeShowBook }) {
  const cardImage = book.volumeInfo.imageLinks
      ? book.volumeInfo.imageLinks.thumbnail
      : "https://redbytesite.com/wp-content/uploads/woocommerce-placeholder-600x600.png";
  const categories = book.volumeInfo?.categories?.join("/ ");
  const title = book.volumeInfo.title;
  const authors = book.volumeInfo.authors?.join(", ");
  const description = book.volumeInfo.description;

  return (
    <>
      <div className="book-item-wrapper">
        <div className="book-item__img__wrapper">
          <img
            className="book-item__img"
            src={cardImage}
            alt=""
          />
        </div>

        <div className="book-item-description-wrapper">
          <p className="book-item__breadcrumbs">
            <span>
              {categories}
            </span>
          </p>
          <h2 className="book-item__title">{title}</h2>
          <p className="book-item__authors">{authors}</p>
          <div className="book-item-description-container">
            <p className="book-item__description">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="desc-container__btn-container">
        <Button
          className="book-item__button"
          onClick={closeShowBook}
          variant="contained"
        >
          Назад
        </Button>
      </div>
    </>
  );
}
