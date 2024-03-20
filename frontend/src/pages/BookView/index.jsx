import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { GiPapers } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { useGetBookByIdQuery } from "../../services/apiServices";

const BookView = () => {
  const { bookId } = useParams();
  const { data } = useGetBookByIdQuery(bookId);

  const addToCart = (e) => {
    e.preventDefault();
    console.log("Added To Cart", data);
  };

  return (
    <>
      <motion.div
        className="container p-2 my-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="row d-flex align-items-center">
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              style={{ cursor: "pointer" }}
              className="border rounded-4"
              width={350}
              height={480}
              src={data?.data.coverImage}
              alt="coverImage"
            />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 p-5">
            <h2 className="fs-2 fw-bold">{data?.data.title}</h2>
            <p className="fs-5">{data?.data.description}</p>
            <div className="d-flex justify-content-start flex-wrap gap-4 mt-4">
              <p className="fs-5 d-flex align-items-center gap-2">
                <FaUserEdit
                  style={{ cursor: "pointer", color: "#e06a50" }}
                  size={28}
                />
                <span className="fw-bold">{data?.author?.name}</span>
              </p>
              <p className="fs-5 d-flex align-items-center gap-2">
                <GiPapers
                  style={{ cursor: "pointer", color: "#e06a50" }}
                  size={28}
                />
                <span className="fw-bold">{data?.data.pages}</span>
              </p>
              <p className="fs-5 d-flex align-items-center gap-2">
                <IoIosPricetag
                  style={{ cursor: "pointer", color: "#e06a50" }}
                  size={28}
                />
                <span className="fw-bold">$ {data?.data.price}</span>
              </p>
            </div>
            <div className="d-flex flex-wrap flex-row gap-2 mt-3">
              <Link
                style={{ backgroundColor: "#4475ad" }}
                onClick={addToCart}
                className="btn text-light d-flex justify-content-center align-items-center gap-2"
              >
                <FaCartShopping size={22} />
                <span>Add To Cart</span>
              </Link>
              <Link
                style={{ backgroundColor: "#4475ad" }}
                to={`/buy/book/${data?.data._id}`}
                className="btn text-light d-flex justify-content-center align-items-center gap-2"
              >
                <BiSolidPurchaseTag size={22} />
                <span>Buy Now</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BookView;
