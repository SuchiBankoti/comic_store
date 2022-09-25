import React, { useState } from "react";
import { createContext } from "react";
const context = createContext();

function LibraryProvider(props) {


    const [books, setBooks] = useState(JSON.parse(localStorage.getItem('library')))

    function add(value) {
        const data = JSON.parse(localStorage.getItem('library'))
        localStorage.setItem('library', JSON.stringify([...data, value]))
        setBooks(JSON.parse(localStorage.getItem("library")))
    }
    function remove(id) {
        let data = JSON.parse(localStorage.getItem('library'))
        data = data.filter(obj => obj.id !== id)
        localStorage.setItem('library', JSON.stringify(data))
        setBooks(JSON.parse(localStorage.getItem("library")))
    }

    function status(id) {
        let data = JSON.parse(localStorage.getItem('library'))
        data = data.map(obj => obj.id === id ? { ...obj, read: !obj.read } : obj)
        localStorage.setItem('library', JSON.stringify(data))
        setBooks(JSON.parse(localStorage.getItem("library")))
    }

    const [findBook, setFindBook] = useState("")
    function search(value) {
        let Book = books.find((obj) => (obj.title === value || obj.author === value) ? obj : null)
        setFindBook(Book)
    }

    const [signingIn, setSigningIn] = useState(false)
    const [signUpData, setSignUpData] = useState(JSON.parse(localStorage.getItem("signIn")))
    function signIn(value) {
        localStorage.setItem('signIn', JSON.stringify(value))
        setSignUpData(value)
        setSigningIn(false)
    }

    const [buy, setBuy] = useState([books[0]])
    function buyBook(id) {
        let data = JSON.parse(localStorage.getItem('library'))
        data = data.filter(obj => obj.id === id)
        setBuy(data)
    }
    return <context.Provider value={{
        books, add, remove, status, search, findBook, signIn,
        signUpData, signingIn, setSigningIn, buy, buyBook
    }}>
        {props.children}
    </context.Provider>
}
export { context as LibraryContext, LibraryProvider }








