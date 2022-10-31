import React, { useState } from "react";
import { createContext } from "react";
const context = createContext();

function LibraryProvider(props) {


  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("library"))
  );

  function Get(arr, str) {
    localStorage.setItem(str, JSON.stringify(arr));
    setBooks(JSON.parse(localStorage.getItem(str)));
  }
  function add(value) {
    const data = JSON.parse(localStorage.getItem("library"));
    localStorage.setItem("library", JSON.stringify([...data, value]));
    setBooks(JSON.parse(localStorage.getItem("library")));
  }
  function remove(id) {
    let data = JSON.parse(localStorage.getItem("library"));
    data = data.filter((obj) => obj.id !== id);
    console.log(data);
    console.log("remove" + id);
    Get(data, "library");
  }

  function status(id) {
    let data = JSON.parse(localStorage.getItem("library"));
    data = data.map((obj) =>
      obj.id === id ? { ...obj, read: !obj.read } : obj);
    Get(data, "library");
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
        signIn,
        signInData,
      }}
    >
      {props.children}
    </context.Provider>
  );
}
export { context as LibraryContext, LibraryProvider };
