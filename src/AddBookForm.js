import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { LibraryContext } from "./Contexts/LibraryContext";
import { FaBook } from "react-icons/fa";

export default function AddBookForm() {
    const { add } = useContext(LibraryContext)
    const [bookData, setBookData] = useState({
        id: nanoid(),
        title: "",
        author: "",
        year: 0,
        lang: "",
        genre: "",
        read: false,
        bookCover: "",
        Rating: 0,
        About: "",

    })
    function change(event) {
        setBookData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })

    }
    return (
        <div>
            <Popup trigger={<div>AddBookForm<FaBook /></div>} position="right center">
                <form>
                    <label>title:
                        <input
                            type="text"
                            name="title"
                            value={bookData.title}
                            onChange={change}

                        />
                    </label>
                    <br />
                    <br />
                    <label>author:
                        <input
                            type="text"
                            name="author"
                            value={bookData.author}
                            onChange={change}

                        />
                    </label>
                    <br />
                    <br />
                    <label>year:
                        <input
                            type="number"
                            name="year"
                            value={bookData.year}
                            onChange={change}
                        />
                    </label>
                    <br />
                    <br />
                    <label>Language:
                        <input
                            type="text"
                            name="lang"
                            value={bookData.lang}
                            onChange={change}
                        />
                    </label>
                    <br />
                    <br />
                    <label>Genre:
                        <input
                            type="text"
                            name="genre"
                            value={bookData.genre}
                            onChange={change}
                        />
                    </label>
                    <br />
                    <br />
                    <label>read:
                        <input
                            type="radio"
                            name="read"
                            value={bookData.read}
                            onChange={change}
                        />
                    </label>
                    <br />
                    <br />
                    <label>bookCover:
                        <input
                            type="text"
                            name="bookCover"
                            value={bookData.bookCover}
                            onChange={change}
                        />
                    </label>
                    <br />
                    <br />
                    <label>Rating
                        <input
                            type="number"
                            name="Rating"
                            value={bookData.Rating}
                            onChange={change}
                        />
                    </label>
                    <br />
                    <br />
                    <label>About:
                        <textarea
                            type="text"
                            name="About"
                            value={bookData.About}
                            onChange={change}
                        />
                    </label>
                </form>
                <br />
                <br />
                <button onClick={() => add(bookData)}>Submit</button>
            </Popup>
        </div>
    )


}