import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

import { signInSchema } from "../../schemas/userSchema";
import { useLoginUserMutation } from "../../services/apiServices";
import TextInput from "../../components/TextInput";
import { signInImg } from "../../assets";

const SignIn = () => {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      try {
        const { data, error } = await loginUser(values);
        error ? toast.error(error.data.message) : toast.success(data.message);
        setTimeout(() => {
          navigate(`/signin`);
        }, 2000);
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  return (
    <>
      <div className="container p-4 my-3">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-5 col-lg-5 mt-lg-5 mt-xl-0 col-md-8 col-sm-12">
            <img src={signInImg} alt="signin" width="100%" />
          </div>
          <form
            className="col-xl-5 col-lg-5 col-md-8 col-sm-12 d-flex flex-column align-items-center p-xl-5 p-sm-4 pt-4"
            onSubmit={formik.handleSubmit}
          >
            <h2 className="pt-2">Sign In</h2>
            <h4 className="mb-5">Sign In Your Account</h4>
            <div className="w-100 mb-3">
              <TextInput
                name="email"
                type="text"
                formik={formik}
                placeholder="Email"
              />
            </div>
            <div className="w-100 mb-3">
              <TextInput
                name="password"
                type="password"
                formik={formik}
                placeholder="Password"
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
      <Toaster position="top-center" reverseOrder={false} />;
    </>
  );
};

export default SignIn;
