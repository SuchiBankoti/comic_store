import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpAccount";
import Book from "./Book";
import { nanoid } from "nanoid";
import { LibraryContext } from "./Contexts/LibraryContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FaSearch, FaBomb } from "react-icons/fa";
import styles from "./Navbar.module.css";


export default function Navbar() {
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
          <div key={nanoid()} className="book">
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



  return (
    <nav className={styles.navbar}>
      <div className={styles.navleft}>
        <div className={styles.comic}>
          <h1>C<FaBomb style={{ color: "brown" }} />MICX</h1>
        </div>
        <Link to="/Library" className="link">
          <h3 className={styles.headingCollection}>Collection</h3>
        </Link>
        <Link to="/" className="link">
          <h3 className={styles.navbtn}> Home</h3>
        </Link>
      </div>
      <div className={styles.navright}>
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
          <div className={styles.searchPopUp}>
            <Popup contentStyle={{ width: "50vh", height: "50vh" }}
              trigger={
                <button className={styles.searchbtn}><FaSearch /></button>
              }
              position="bottom right"
            >
              <div className={styles.searchResult}>{searchedBook}</div>
            </Popup>
          </div>
        </div>


        <div className={styles.signBtn}>
          <SignUpForm />
        </div>

      </div>
    </nav>
  );
}
