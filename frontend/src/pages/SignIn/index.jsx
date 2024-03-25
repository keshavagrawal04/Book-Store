import { useState } from "react";
import { Link } from "react-router-dom";
import { signInImg } from "../../assets";

const SignIn = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container p-4 my-3">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-5 col-lg-5 mt-lg-5 mt-xl-0 col-md-8 col-sm-12">
            <img src={signInImg} alt="signin" width="100%" />
          </div>
          <form
            className="col-xl-5 col-lg-5 col-md-8 col-sm-12 d-flex flex-column align-items-center p-xl-5 p-sm-4 pt-4"
            onSubmit={handleLogin}
          >
            <h2 className="pt-2">Sign In</h2>
            <h4 className="mb-5">Sign In Your Account</h4>
            <div className="input-group mb-3">
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                className="form-control fs-6"
                placeholder="Email Address"
                aria-label="Email Address"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                className="form-control fs-6"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                required
                autoComplete="auto"
              />
            </div>
            <div className="input-group text-right">
              <Link
                to="/forgot-password"
                className="text-decoration-none text-black"
              >
                Forgot Password ?
              </Link>
            </div>
            <button
              style={{ backgroundColor: "#4475ad" }}
              className="btn text-light fs-6 p-2 mt-2 px-4"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
