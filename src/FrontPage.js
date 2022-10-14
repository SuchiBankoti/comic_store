import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
import Book from "./Book";
import { nanoid } from "nanoid";
import { FaSearch } from "react-icons/fa";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "./FrontPage.module.css";


export default function FrontPage() {
  const { books } = useContext(LibraryContext);
  const [searchedBook, setSearchedBook] = useState([
    <div>please type a name</div>,
  ]);
  function search(event) {
    setSearchedBook((prev) => {
      if (event.target.value === "") {
        return <div>please type a name</div>;
      }
      let searchArr = books.filter(
        (obj) =>
          new RegExp("^" + obj.title + "$", "i").test(event.target.value) ||
          new RegExp("^" + obj.author + "$", "i").test(event.target.value)
      );
      return searchArr.length > 0
        ? (prev = searchArr.map((book) => (
          <div key={nanoid()}>
            <Book book={book} />
          </div>
        )))
        : (prev = (
          <div>
            <h1>cannot find book</h1>
          </div>
        ));
    });
  }
  const newArrivals = books
    .filter((book, i) => i < 3)
    .map((book) => (
      <div key={nanoid()} className="book">
        <Book book={book} />
      </div>
    ));
  const bestSellers = books
    .filter((book, i) => i < 3)
    .map((book) => (
      <div key={nanoid()} className="book">
        <Book book={book} />
      </div>
    ));

  return (
    <div className={styles.frontpage}>

      <div className={styles.header}>
        <div>
          <h1>
            <Link to="/Library" className="link">
              <h1 className={styles.browseHeading}>Browse Our Collection</h1>
            </Link>
          </h1>
        </div>
        <div className={styles.searchbar}>
          <form>
            <label>
              <input
                className={styles.search}
                type="text"
                placeholder="Search by the Title or the Author"
                onChange={search}
              />
            </label>
          </form>
          <Popup
            trigger={
              <button className={styles.searchbtn}>
                <FaSearch />
              </button>
            }
            position="bottom right"
          >
            <div>{searchedBook}</div>
          </Popup>
        </div>
      </div>
      <div className={styles.newarrivals}>
        <h3>New Arrivals</h3>
        <div>{newArrivals}</div>
      </div>
      <div className={styles.bestSellers}>
        <h3>BestSeller</h3>
        <div>{bestSellers}</div>
      </div>
    </div>
  );
}
