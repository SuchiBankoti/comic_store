import React, { useContext, useState, useReducer } from "react";
import Book from "./Book";
import { nanoid } from "nanoid";
import { LibraryContext } from "./Contexts/LibraryContext";
import ProfilePic from "./shakes.png";
import AddBookForm from "./AddBookForm";

function reduceSort(state, action) {
  const { type } = action;
  switch (type) {
    case "title":
      return (a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0);
    case "year":
      return (a, b) => (a.year > b.year ? 1 : a.year < b.year ? -1 : 0);
    case "Rating":
      return (a, b) => (a.Rating > b.Rating ? -1 : a.Rating < b.Rating ? 1 : 0);
    case "price":
      return (a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0);
    default:
      return state;
  }
}

function reduceCategory(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "genre":
      return {
        ...state,
        genre: (book) => payload === "All" || book.genre.includes(payload),
      };
    case "price":
      return { ...state, price: (book) => book.price <= payload };
    default:
      return state;
  }
}

export default function Library() {
  const { remove, books } = useContext(LibraryContext);
  const [sortFn, dispatchSort] = useReducer(reduceSort, undefined);
  const [categoryFn, dispatchCategory] = useReducer(reduceCategory, {});

  const categorized = books
    .filter((book) => {
      return Object.values(categoryFn).every((fn) => fn(book));
    })
    .sort(sortFn);

  //   const sorted = categorized.sort(sortFn);

  let library = categorized.map((obj) => {
    return (
      <div key={nanoid()} className="book">
        <Book book={obj} />
        <button onClick={() => remove(obj.id)}>Remove</button>
      </div>
    );
  });

  return (
    <div className="library">
      <div className="library-sidebar">
        <div className="account">
          <div className="profile">
            <img alt="" src={ProfilePic} />
            <div>Pink Panther</div>
          </div>
        </div>
        <div className="sidebar-footer">
          <div>
            <AddBookForm />
          </div>

          <label htmlFor="books-genre">
            select a genre:
            <select
              id="books-genre"
              onChange={({ target }) => {
                dispatchCategory({ type: "genre", payload: target.value });
              }}
            >
              <option value="All">All</option>
              <option value="Horror">Horror</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Classics">Classics</option>
              <option value="Action-Adventure">Action-Adventure</option>
            </select>
          </label>
          <br></br>
          <br></br>

          <label>
            Price-Range:
            <div className="slide-container">
              <div></div>
              <input
                type="range"
                min="50"
                max="1000"
                value="500"
                className="slider"
                onChange={({ target }) => {
                  dispatchCategory({ type: "price", payload: target.value });
                }}
              ></input>
            </div>
          </label>
        </div>
      </div>
      <div className="library-mainpage">
        <div>Sort by:</div>
        <div className="sort">
          <select
            onChange={({ target }) => {
              dispatchSort({ type: target.value });
            }}
          >
            <option value="title">A-Z</option>
            <option value="year">New-Old</option>
            <option value="Rating">Top-Rated</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div className="collection">{library}</div>
      </div>
    </div>
  );
}
