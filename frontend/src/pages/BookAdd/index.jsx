import { useState } from "react";
import { useFormik } from "formik";
import { bookSchema } from "../../schemas/bookSchema";
import TextInput from "../../components/TextInput";
import Select from "react-select";

const BookAdd = () => {
  const genreOptions = [
    { value: "fiction", label: "Fiction" },
    { value: "non-fiction", label: "Non-Fiction" },
    { value: "fantasy", label: "Fantasy" },
    { value: "sci-fi", label: "Science Fiction" },
    { value: "mystery", label: "Mystery" },
    { value: "romance", label: "Romance" },
  ];

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      pages: "",
      ISBN: "",
      coverImage: "",
      genre: [],
      author: {
        name: "",
        email: "",
        gender: "",
      },
      publication: {
        name: "",
        date: "",
      },
    },
    validationSchema: bookSchema,
    onSubmit: async (values) => {
      values.genre = values.genre.map((genre) => genre.value);
      console.log(values);
    },
  });

  const handleGenreChange = (selectedGenre) => {
    formik.setFieldValue("genre", selectedGenre);
  };

  return (
    <>
      <div className="container p-2">
        <div className="row d-flex justify-content-center py-4 gap-2">
          <div className="row d-flex flex-row justify-content-center gap-2">
            {/* Book Details */}
            <div className="col-12 col-lg-5 col-md-8 border rounded p-4">
              <p className="ms-2 fs-5 fw-bold">Book Details</p>
              <div className="mb-3">
                <TextInput
                  name="title"
                  type="text"
                  formik={formik}
                  placeholder="Enter Book Title"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  id="description"
                  placeholder="Description"
                  rows="6"
                  style={{
                    border: `1.5px solid ${
                      formik.touched.description && formik.errors.description
                        ? "rgb(200, 23, 23)"
                        : "#01256033"
                    }`,
                    resize: "none",
                  }}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-danger error">
                    {formik.errors.description}
                  </div>
                ) : (
                  <div className="error2"></div>
                )}
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <TextInput
                    name="price"
                    type="number"
                    formik={formik}
                    placeholder="Enter Book Price"
                  />
                </div>
                <div className="col-6">
                  <TextInput
                    name="pages"
                    type="number"
                    formik={formik}
                    placeholder="Enter Book Pages"
                  />
                </div>
              </div>
              <div className="mb-3">
                <TextInput
                  name="ISBN"
                  type="number"
                  formik={formik}
                  placeholder="Enter ISBN Number"
                />
              </div>
              <div className="mb-3">
                <TextInput
                  name="coverImage"
                  type="text"
                  formik={formik}
                  placeholder="Enter Cover Image Url"
                />
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-5 border rounded">
              <div className="row d-flex flex-column p-4">
                {/* Author Details */}
                <div className="col">
                  <p className="ms-2 fs-5 fw-bold">Author Details</p>
                  <div className="mb-3">
                    <input
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                      id="author.name"
                      value={formik.values.author.name}
                      placeholder="Enter Author Name"
                      style={{
                        border: `1.5px solid ${
                          formik.touched.author?.name &&
                          formik.errors.author?.name
                            ? "rgb(200, 23, 23)"
                            : "#01256033"
                        }`,
                      }}
                    />
                    {formik.touched.author?.name &&
                    formik.errors.author?.name ? (
                      <div className="text-danger error">
                        {formik.errors.author?.name}
                      </div>
                    ) : (
                      <div className="error2"></div>
                    )}
                  </div>
                  <div className="row mb-3">
                    <div className="col-8">
                      <input
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                        id="author.email"
                        value={formik.values.author.email}
                        placeholder="Enter Author Email"
                        style={{
                          border: `1.5px solid ${
                            formik.touched.author?.email &&
                            formik.errors.author?.email
                              ? "rgb(200, 23, 23)"
                              : "#01256033"
                          }`,
                        }}
                      />
                      {formik.touched.author?.email &&
                      formik.errors.author?.email ? (
                        <div className="text-danger error">
                          {formik.errors.author?.email}
                        </div>
                      ) : (
                        <div className="error2"></div>
                      )}
                    </div>
                    <div className="col-4">
                      <select
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.author.gender}
                        className="form-control"
                        id="author.gender"
                        style={{
                          border: `1.5px solid ${
                            formik.touched.author?.gender &&
                            formik.errors.author?.gender
                              ? "rgb(200, 23, 23)"
                              : "#01256033"
                          }`,
                        }}
                      >
                        <option value="gender">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {formik.touched.author?.gender &&
                      formik.errors.author?.gender ? (
                        <div className="text-danger error">
                          {formik.errors.author?.gender}
                        </div>
                      ) : (
                        <div className="error2"></div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Publisher Details */}
                <div className="col">
                  <p className="ms-2 fs-5 fw-bold">Publication Details</p>
                  <div className="mb-3">
                    <input
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                      id="publication.name"
                      value={formik.values.publication.name}
                      placeholder="Enter Publication Name"
                      style={{
                        border: `1.5px solid ${
                          formik.touched.publication?.name &&
                          formik.errors.publication?.name
                            ? "rgb(200, 23, 23)"
                            : "#01256033"
                        }`,
                      }}
                    />
                    {formik.touched.publication?.name &&
                    formik.errors.publication?.name ? (
                      <div className="text-danger error">
                        {formik.errors.publication?.name}
                      </div>
                    ) : (
                      <div className="error2"></div>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control error-border"
                      id="publication.date"
                      value={formik.values.publication.date}
                      placeholder="Enter Publication Date"
                      style={{
                        border: `1.5px solid ${
                          formik.touched.publication?.date &&
                          formik.errors.publication?.date
                            ? "rgb(200, 23, 23)"
                            : "#01256033"
                        }`,
                      }}
                    />
                    {formik.touched.publication?.date &&
                    formik.errors.publication?.date ? (
                      <div className="text-danger error">
                        {formik.errors.publication?.date}
                      </div>
                    ) : (
                      <div className="error2"></div>
                    )}
                  </div>
                </div>
                {/* Publisher Details */}
                <p className="ms-2 fs-5 fw-bold">Genre</p>
                <div className="col d-flex gap-2 flex-wrap">
                  <div className="col-12">
                    <Select
                      onChange={handleGenreChange}
                      options={genreOptions}
                      onBlur={formik.handleBlur}
                      value={formik.values.genre || []}
                      placeholder="Select Genre"
                      isMulti
                      className={
                        formik.touched?.genre && formik.errors?.genre
                          ? "error-border"
                          : "border"
                      }
                    />
                    {formik.touched.genre && formik.errors.genre ? (
                      <div className="text-danger error">
                        {formik.errors.genre}
                      </div>
                    ) : (
                      <div className="error2"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center gap-2">
            <div className="col-4 d-flex justify-content-center">
              <button
                type="button"
                onClick={formik.handleSubmit}
                style={{ backgroundColor: "#4475ad" }}
                className="btn text-light"
              >
                Add Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAdd;
