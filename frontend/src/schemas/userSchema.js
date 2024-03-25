import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^\w+[-.\w]*@\w+[-.\w]*(\.\w{2,3})+$/,
      "Please enter a valid email address"
    ),
  contactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, {
      message: "Contact Number must be exactly 10 digits",
    })
    .required("Contact  is required"),
  dateOfBirth: Yup.string().required("Date of Birth is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[A-Za-z])/, "Password must contain at least one letter")
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .matches(
      /^(?=.*[@$!%*#?&])/,
      "Password must contain at least one special character"
    )
    .matches(
      /^[A-Za-z\d@$!%*#?&]+$/,
      "Password must not contain invalid characters"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
