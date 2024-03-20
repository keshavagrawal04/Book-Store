import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container p-5 m-5">
      <div className="row my-5">
        <div className="col-md-12 text-center my-5">
          <h1 className="display-4">Welcome to Our Bookstore!</h1>
          <p className="lead">Find all your favorite books here.</p>
          <Link
            to="/books"
            className="btn btn-primary mb-5 fs-5 fw-bold px-4"
            style={{ backgroundColor: "#4475ad" }}
          >
            Explore Our Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
