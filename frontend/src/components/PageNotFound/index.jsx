import { pageNotFoundImg } from "../../assets";

const PageNotFound = () => {
  return (
    <div className="container p-5">
      <div className="d-flex flex-column justify-content-center align-items-center mb-1">
        <img src={pageNotFoundImg} width="450px" alt="pageNotFound" />
        <p
          className="fs-3 fw-bold text-center mt-1"
          style={{ color: "#F0565F" }}
        >
          Page Not Found
        </p>
        <button
          className="btn text-light fw-bold px-5"
          style={{ backgroundColor: "#F0565F" }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
