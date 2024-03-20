import React, { useState } from 'react'

const BookAdd = () => {
    const [genre, setGenre] = useState([]);
    const [book, setBook] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="container p-2">
                <div className="row d-flex justify-content-center py-4 gap-2">
                    <div className="row d-flex flex-row justify-content-center gap-2">
                        {/* Book Details */}
                        <div className="col-12 col-lg-5 col-md-8 border rounded p-4">
                            <p className="ms-2 fs-5 fw-bold">Book Details</p>
                            <div className="mb-3">
                                <input type="text" onChange={(e) => { setBook({ ...book, title: e.target.value }) }} className="form-control" id="title" placeholder="Title" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" onChange={(e) => { setBook({ ...book, description: e.target.value }) }} id="description" style={{ resize: "none" }} placeholder="Description" rows="6"></textarea>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <input type="number" onChange={(e) => { setBook({ ...book, price: e.target.value }) }} className="form-control" id="pages" placeholder="Price" />
                                </div>
                                <div className="col-6">
                                    <input type="number" onChange={(e) => { setBook({ ...book, pages: e.target.value }) }} className="form-control" id="pages" placeholder="Pages" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="number" onChange={(e) => { setBook({ ...book, ISBN: e.target.value }) }} className="form-control" id="pages" placeholder="ISBN" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" onChange={(e) => { setBook({ ...book, coverImage: e.target.value }) }} id="coverImage" placeholder="Cover Image URL" />
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-5 border rounded">
                            <div className="row d-flex flex-column p-4">
                                {/* Author Details */}
                                <div className="col">
                                    <p className="ms-2 fs-5 fw-bold">Author Details</p>
                                    <div className="mb-3">
                                        <input type="text" onChange={(e) => { setBook({ ...book, author: { name: e.target.value } }) }} className="form-control" id="name" placeholder="Name" />
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-8">
                                            <input type="email" onChange={(e) => { setBook({ ...book, author: { email: e.target.value } }) }} className="form-control" id="email" placeholder="Email" />
                                        </div>
                                        <div className="col-4">
                                            <select onChange={(e) => { setBook({ ...book, author: { gender: e.target.value } }) }} name="gender" className="form-control" id="gender">
                                                <option value="gender">Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* Publisher Details */}
                                <div className="col">
                                    <p className="ms-2 fs-5 fw-bold">Publication Details</p>
                                    <div className="mb-3">
                                        <input type="text" onChange={(e) => { setBook({ ...book, publication: { name: e.target.value } }) }} className="form-control" id="name" placeholder="Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" onChange={(e) => { setBook({ ...book, author: { year: e.target.value } }) }} className="form-control" id="year" placeholder="Year" />
                                    </div>
                                </div>
                                {/* Publisher Details */}
                                <p className="ms-2 fs-5 fw-bold">Genre</p>
                                <div className="col d-flex gap-2 flex-wrap">
                                    <div className="">
                                        <input onSelect={(e) => { setGenre((prev) => prev.push(e.target.value)) }} className="form-check-input" type="checkbox" id="general" value="general" />
                                        <label className="form-check-label ms-2" htmlFor="general">General</label>
                                    </div>
                                    <div className="">
                                        <input onSelect={(e) => { setGenre((prev) => prev.push(e.target.value)) }} className="form-check-input" type="checkbox" id="fiction" value="fiction" />
                                        <label className="form-check-label ms-2" htmlFor="fiction">Fiction</label>
                                    </div>
                                    <div className="">
                                        <input onSelect={(e) => { setGenre((prev) => prev.push(e.target.value)) }} className="form-check-input" type="checkbox" id="non-fiction" value="non-fiction" />
                                        <label className="form-check-label ms-2" htmlFor="non-fiction">Non-Fiction</label>
                                    </div>
                                    <div className="">
                                        <input onSelect={(e) => { setGenre((prev) => prev.push(e.target.value)) }} className="form-check-input" type="checkbox" id="drama" value="drama" />
                                        <label className="form-check-label ms-2" htmlFor="drama">Drama</label>
                                    </div>
                                    <div className="">
                                        <input onSelect={(e) => { setGenre((prev) => prev.push(e.target.value)) }} className="form-check-input" type="checkbox" id="horror" value="horror" />
                                        <label className="form-check-label ms-2" htmlFor="horror">Horror</label>
                                    </div>
                                    <div className="">
                                        <input onSelect={(e) => { setGenre((prev) => prev.push(e.target.value)) }} className="form-check-input" type="checkbox" id="comedy" value="comedy" />
                                        <label className="form-check-label ms-2" htmlFor="comedy">Comedy</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center gap-2">
                        <div className="col-4 d-flex justify-content-center">
                            <button onClick={handleSubmit} style={{ backgroundColor: "#4475ad" }} className="btn text-light">Add Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookAdd
