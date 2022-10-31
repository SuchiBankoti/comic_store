import React from "react";
import { useContext } from "react";
import { LibraryContext } from "./Contexts/LibraryContext";
import Book from "./Book";
import { nanoid } from "nanoid";
import styles from "./FrontPage.module.css";
import comicImg from "./back.png"
import { FaBomb } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io";
import { GiAbstract068, GiBatMask, GiBurningSkull, GiBatWing } from "react-icons/gi";


export default function FrontPage() {
  const { books } = useContext(LibraryContext);
  const newArrivals = books
    .filter((book, i) => i < 3)
    .map((book) => (
      <div key={nanoid()} className="book">
        <Book book={book} />
      </div>
    ));

  return (
    <div className={styles.frontpage}>

      <div className={styles.header}>
        <img alt="" src={comicImg} />
      </div>
      <div className={styles.comic}>
        <h1>C<FaBomb style={{ color: "brown" }} />  MICX</h1>
      </div>
      <div className={styles.famous}>
        <div className={styles.logobox}>< IoLogoOctocat className={styles.logo} /></div>
        <div className={styles.logobox}><GiAbstract068 className={styles.logo} /></div>
        <div className={styles.logobox}><GiBatMask className={styles.logo} /></div>
        <div className={styles.logobox}><GiBurningSkull className={styles.logo} /></div>
        <div className={styles.logobox}><GiBatWing className={styles.logo} /></div>
      </div>

      <div className={styles.newarrivals}>
        <h2>New Arrivals</h2>
        <div className={styles.newBooks}>
          {newArrivals}
        </div>
      </div>

    </div>
  );
}
