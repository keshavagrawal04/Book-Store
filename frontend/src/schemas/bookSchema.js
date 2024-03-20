import * as Yup from "yup";

export const bookSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  pages: Yup.number()
    .required("Number of pages is required")
    .positive("Number of pages must be positive"),
  ISBN: Yup.string().required("ISBN Number is required"),
  coverImage: Yup.string().required("Cover Image Url is required"),
  genre: Yup.array().min(1, "Genre is required"),
  author: Yup.object({
    name: Yup.string().required("Author name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    gender: Yup.string()
      .required("Gender is required")
      .oneOf(["male", "female", "other"], "Invalid gender"),
  }),
  publication: Yup.object({
    name: Yup.string().required("Publication name is required"),
    date: Yup.date().required("Publication date is required"),
  }),
});
