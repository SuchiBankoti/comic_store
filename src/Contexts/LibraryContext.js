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

    const [signInData, setSignInData] = useState(JSON.parse(sessionStorage.getItem("signIn")))
    function signIn(value) {
        sessionStorage.setItem("signIn", JSON.stringify(value))
        setSignInData(JSON.parse(sessionStorage.getItem("signIn")))
        console.log(signInData)
    }

    const [buy, setBuy] = useState([books[0]])
    function buyBook(id) {
        let data = JSON.parse(localStorage.getItem('library'))
        data = data.filter(obj => obj.id === id)
        setBuy(data)
    }
    return <context.Provider value={{
        books, add, remove, status, search, findBook, signIn,
        signInData, buy, buyBook
    }}>
        {props.children}
    </context.Provider>
}
export { context as LibraryContext, LibraryProvider }








