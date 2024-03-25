import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { motion } from "framer-motion";
import { GiPapers } from "react-icons/gi";

const BookCard = ({ book }) => {
  return (
    <>
      <motion.div
        className="rounded-2 py-2 col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex justify-content-center px-2">
          <img
            src={book.coverImage}
            width={300}
            height={280}
            alt="coverImage"
          />
        </div>
        <div className="ms-1 p-2">
          <h5 className="fw-bold fs-5 text-center mt-2">{book.title}</h5>
          <div className="d-flex justify-content-around mt-4">
            <p className="fs-6 d-flex align-items-center flex-column">
              <FaUserEdit
                style={{ cursor: "pointer", color: "#e06a50" }}
                size={28}
              />
              <span className="fw-bold">{book.author.name}</span>
            </p>
            <p className="fs-6 d-flex align-items-center flex-column">
              <GiPapers
                style={{ cursor: "pointer", color: "#e06a50" }}
                size={28}
              />
              <span className="fw-bold">{book.pages}</span>
            </p>
            <p className="fs-6 d-flex align-items-center flex-column">
              <IoIosPricetag
                style={{ cursor: "pointer", color: "#e06a50" }}
                size={28}
              />
              <span className="fw-bold">$ {book.price}</span>
            </p>
          </div>
        </div>
        <div className="p-2">
          <Link
            style={{ backgroundColor: "#4475ad" }}
            to={`/book/${book._id}`}
            className="btn w-100 text-light"
          >
            Read More
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default BookCard;
