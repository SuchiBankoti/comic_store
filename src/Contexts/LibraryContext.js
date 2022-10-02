import React, { useState } from "react";
import { createContext } from "react";
const context = createContext();

function LibraryProvider(props) {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("library"))
  );

  function setGet(arr, str, val) {
    localStorage.setItem(str, JSON.stringify([...arr, val]));
    setBooks(JSON.parse(localStorage.getItem(str)));
  }
  function add(value) {
    const data = JSON.parse(localStorage.getItem("library"));
    setGet(data, "library", value);
  }
  function remove(id) {
    let data = JSON.parse(localStorage.getItem("library"));
    data = data.filter((obj) => obj.id !== id);
    console.log(data);
    console.log("remove" + id);
    setGet(data, "library");
  }

  function status(id) {
    let data = JSON.parse(localStorage.getItem("library"));
    data = data.map((obj) =>
      obj.id === id ? { ...obj, read: !obj.read } : obj
    );
    setGet(data, "library");
  }

  const [findBook, setFindBook] = useState("");
  function search(value) {
    let Book = books.find((obj) =>
      obj.title === value || obj.author === value ? obj : null
    );
    setFindBook(Book);
  }

  const [signInData, setSignInData] = useState(
    JSON.parse(sessionStorage.getItem("signIn"))
  );
  function signIn(value) {
    sessionStorage.setItem("signIn", JSON.stringify(value));
    setSignInData(JSON.parse(sessionStorage.getItem("signIn")));
  }

  return (
    <context.Provider
      value={{
        books,
        add,
        remove,
        status,
        search,
        findBook,
        signIn,
        signInData,
      }}
    >
      {props.children}
    </context.Provider>
  );
}
export { context as LibraryContext, LibraryProvider };
