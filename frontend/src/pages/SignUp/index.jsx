import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";

import { signUpImg } from "../../assets";
import TextInput from "../../components/TextInput";
import { signUpSchema } from "../../schemas/userSchema";
import { useRegisterUserMutation } from "../../services/apiServices";

const SignUp = () => {
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
      profileImage: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      try {
        const { data, error } = await registerUser(values);
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
      <div className="container p-4">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xl-5 col-lg-5 mt-lg-5 mt-xl-0 col-md-8 col-sm-12">
            <img src={signUpImg} alt="signUp" width="100%" />
          </div>
          <form
            className="col-xl-5 col-lg-5 col-md-8 col-sm-12 d-flex flex-column align-items-center p-xl-5 pt-xl-0 p-sm-4 pt-4"
            onSubmit={formik.handleSubmit}
          >
            <h2 className="pt-2">Sign Up</h2>
            <h4 className="mb-5">Create Your Account</h4>
            <div className="w-100 mb-3">
              <TextInput
                name="fullName"
                type="text"
                formik={formik}
                placeholder="Full Name"
              />
            </div>
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
                name="contactNumber"
                type="number"
                formik={formik}
                placeholder="Contact Number"
              />
            </div>
            <div className="w-100 mb-3">
              <TextInput
                name="dateOfBirth"
                type="date"
                formik={formik}
                placeholder="Date of Birth"
              />
            </div>
            <div className="w-100 mb-3">
              <TextInput
                name="password"
                type="password"
                formik={formik}
                placeholder="Password"
                autocomplete="new-password"
              />
            </div>
            <div className="w-100 mb-3">
              <TextInput
                name="confirmPassword"
                type="password"
                formik={formik}
                placeholder="Confirm Password"
                autocomplete="new-password"
              />
            </div>
            <button
              style={{ backgroundColor: "#4475ad" }}
              className="btn text-light fs-6 p-2 mt-2 px-4"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />;
    </>
  );
};

export default SignUp;
