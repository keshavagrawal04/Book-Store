import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import BookCard from "../../components/BookCard";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { useGetBooksQuery } from "../../services/apiServices";

const Books = () => {
  const ref = useRef();
  const [pageSize, setPageSize] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetBooksQuery({
    pageSize,
    page,
    searchTerm,
    filterGenre,
  });

  const handleNext = () => {
    if (!(page >= data.data?.totalPages)) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!(page <= 1)) {
      setPage((prev) => prev - 1);
    }
  };

  const handlePageSize = (e) => {
    setPageSize(e.target.value);
    setPage(1);
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterGenre = (e) => {
    setFilterGenre(e.target.value);
  };

  if (isLoading) {
    return (
      <div
        className="d-flex flex-column gap-3 justify-content-center align-items-center p-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="spinner-border" role="status" />
        <span
          className="fs-3 text-center fw-bold"
          style={{ letterSpacing: "2px" }}
        >
          Loading
        </span>
      </div>
    );
  }

  return (
    <>
      <div ref={ref} className="container">
        <div className="row mt-4">
          <div className="col-xl-4 col-lg-5 col-md-6 ms-md-3 ms-0 d-flex align-items-center">
            <p
              style={{ backgroundColor: "#4475ad" }}
              className="d-flex mb-0 justify-content-center align-items-center border p-2 rounded text-light"
            >
              <IoSearch size={22} />
            </p>
            <input
              value={searchTerm}
              onChange={handleSearchTerm}
              type="text"
              placeholder="Enter title to search"
              autoComplete="false"
              className="form-control fw-bold"
              id="search"
              style={{ boxShadow: "none" }}
            />
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 ms-md-3 ms-0 d-flex align-items-center">
            <p
              style={{ backgroundColor: "#4475ad" }}
              className="d-flex mb-0 justify-content-center align-items-center border p-2 rounded text-light"
            >
              <IoSearch size={22} />
            </p>
            <select
              style={{ boxShadow: "none" }}
              value={filterGenre}
              className="form-select fw-bold border-none"
              onChange={handleFilterGenre}
            >
              <option value="">Sort By Genre</option>
              <option value="fiction">Fiction</option>
              <option defaultValue="non fiction">Non Fiction</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
            </select>
          </div>
        </div>
        {!data?.data?.books.length ? (
          <div
            className="d-flex flex-column gap-3 justify-content-center align-items-center p-5"
            style={{ minHeight: "70vh" }}
          >
            <span
              className="fs-3 text-center fw-bold"
              style={{ letterSpacing: "2px" }}
            >
              Data Not Found
            </span>
          </div>
        ) : (
          <>
            <div className="row d-flex py-4 justify-content-start">
              {data &&
                data?.data?.books.map((book) => (
                  <BookCard key={book._id} book={book} />
                ))}
            </div>
            <div
              style={{ width: "130px" }}
              className="row d-flex flex-row m-auto mb-3 justify-content-center gap-2"
            >
              <select
                style={{ boxShadow: "none" }}
                value={pageSize}
                className="form-select fw-bold border-none"
                onChange={handlePageSize}
              >
                <option value={4}>4</option>
                <option defaultValue={8}>8</option>
                <option value={12}>12</option>
              </select>
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
              <HiArrowSmLeft
                style={{ backgroundColor: "#4475ad", cursor: "pointer" }}
                onClick={handlePrev}
                size={35}
                className="border text-light rounded-circle p-1"
              />
              <p className="fw-bold fs-5 mt-1">
                {page} of {data && data?.data?.totalPages}
              </p>
              <HiArrowSmRight
                style={{ backgroundColor: "#4475ad", cursor: "pointer" }}
                onClick={handleNext}
                className="border text-light rounded-circle p-1"
                size={35}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Books;
