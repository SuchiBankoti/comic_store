import React, { useState } from "react";
import { createContext } from "react";
const context = createContext();

function LibraryProvider(props) {



    // localStorage.setItem('library', JSON.stringify([{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", lang: "english", year: 1925, read: false, bookCover: "greatGatsby.png", Rating: 3.9, About: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald." },
    // { title: " 100 Years of Solitude", author: "Gabriel García Márquez", lang: "Spanish", year: 1967, read: false, bookCover: "solitude.png", Rating: 3.9, About: "the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the town of Macondo. " },
    // { title: "To Kill a Mockingbird", author: "Harper Lee", lang: "english", year: 1960, read: false, bookCover: "mocking.png", Rating: 3.9, About: "To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize." },
    // { title: "Lolita", "author": "Vladimir Nabokov", lang: "english", year: 1955, read: false, bookCover: "lolita.png", Rating: 3.9, About: " The novel is notable for its controversial subject: the protagonist and unreliable narrator" },
    // { title: "Anna Karenina", author: "Leo Tolstoy", lang: "english", year: 1878, read: false, bookCover: "anna.png", Rating: 3.9, About: "Widely considered to be one of the greatest works of literature ever written, Tolstoy himself called it his first true novel" },
    // { title: "Nineteen Eighty-Four", author: "George Orwell", lang: "english", year: 1949, read: false, bookCover: "1984.png", Rating: 3.9, About: "Nineteen Eighty-Four is a dystopian social science fiction novel and cautionary tale written by the English writer George Orwell. " },
    // { title: "Huckleberry Finn", author: "Mark Twain", lang: "english", year: 1884, read: false, bookCover: "book1.png", Rating: 3.9, About: "A novel set in the pre-Civil War South that examines institutionalized racism and explores themes of freedom, civilization, and prejudice." },
    // { title: "prince of renissance", author: "Mark Twain", lang: "english", year: 1884, read: false, bookCover: "book3.png", Rating: 3.9, About: "A novel set in the pre-Civil War South that examines institutionalized racism and explores themes of freedom, civilization, and prejudice." },
    // { title: "prince of renissance", author: "Mark Twain", lang: "english", year: 1884, read: false, bookCover: "book4.png", Rating: 3.9, About: "A novel set in the pre-Civil War South that examines institutionalized racism and explores themes of freedom, civilization, and prejudice." },
    // { title: "prince of renissance", author: "Mark Twain", lang: "english", year: 1884, read: false, bookCover: "book6.png", Rating: 3.9, About: "A novel set in the pre-Civil War South that examines institutionalized racism and explores themes of freedom, civilization, and prejudice." },
    // { title: "prince of renissance", author: "Mark Twain", lang: "english", year: 1884, read: false, bookCover: "book1.png", Rating: 3.9, About: "A novel set in the pre-Civil War South that examines institutionalized racism and explores themes of freedom, civilization, and prejudice." },
    // { title: "prince of renissance", author: "Mark Twain", lang: "english", year: 1884, read: false, bookCover: "book3.png", Rating: 3.9, About: "A novel set in the pre-Civil War South that examines institutionalized racism and explores themes of freedom, civilization, and prejudice." },
    // { title: "prince of renissance", author: "Mark Twain", lang: "english", year: 1884, read: false, bookCover: "book5.png", Rating: 3.9, About: "A novel set in the pre-Civil War South that examines institutionalized racism and explores themes of freedom, civilization, and prejudice." }
    // ]))


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
    const [bookDetail, setBookDetail] = useState(books[0])
    function showBookDetail(value) {
        setBookDetail(value)
    }
    return <context.Provider value={{
        books, add, remove, status, search, findBook, signIn,
        signUpData, showBookDetail, bookDetail, signingIn, setSigningIn
    }}>
        {props.children}
    </context.Provider>
}
export { context as LibraryContext, LibraryProvider }








