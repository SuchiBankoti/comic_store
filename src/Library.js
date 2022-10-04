import React, { useContext, useState, useReducer } from "react";
import Book from "./Book";
import { nanoid } from "nanoid";
import { LibraryContext } from "./Contexts/LibraryContext";
import ProfilePic from "./shakes.png";
import AddBookForm from "./AddBookForm";
import styles from "./Library.module.css";

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
    case "lang":
      return {
        ...state,
        land: (book) => payload === "All" || book.lang.includes(payload),
      };
    default:
      return state;
  }
}

export default function Library() {
  const { remove, books } = useContext(LibraryContext);
  const [sideBar, setSideBar] = useState(false);
  const [sortFn, dispatchSort] = useReducer(reduceSort, undefined);
  const [categoryFn, dispatchCategory] = useReducer(reduceCategory, {});
  const [sliderValue, setSlider] = useState(0);

  function updateSlider({ target }) {
    let value = target.value;
    value = Math.floor(value / 100) * 100; //step=100
    setSlider(value);
    dispatchCategory({ type: "price", payload: value });
  }
  const categorized = books
    .filter((book) => {
      return Object.values(categoryFn).every((fn) => fn(book));
    })
    .sort(sortFn);

  let library = categorized.map((obj) => {
    return (
      <div key={nanoid()} className="book">
        <Book book={obj} />
        <button onClick={() => remove(obj.id)}>Remove</button>
      </div>
    );
  });

  return (
    <div className={styles.library}>
      <button onClick={() => setSideBar((prev) => !prev)}>sideBar</button>
      {sideBar ? (
        <div className={styles.librarysidebar}>
          <div className={styles.account}>
            <div className={styles.profile}>
              <img alt="" src={ProfilePic} />
              <div>Pink Panther</div>
            </div>
          </div>
          <div className={styles.sidebarfooter}>
            <div>
              <AddBookForm />
            </div>

            <label>
              select a genre:
              <select
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
              Select Language:
              <select
                onChange={({ target }) => {
                  dispatchCategory({ type: "lang", payload: target.value });
                }}
              >
                <option value="All">All</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="hindi">Hindi</option>
                <option value="french">French</option>
              </select>
            </label>
            <br></br>
            <br></br>
            <label>
              Price-Range:
              <div className="slide-container">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={sliderValue}
                  id="slider"
                  onChange={updateSlider}
                ></input>
              </div>
            </label>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={styles.librarymainpage}>
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
        <div className={styles.collection}>{library}</div>
      </div>
    </div>
  );
}
