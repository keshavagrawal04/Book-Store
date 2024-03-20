const TextInput = (props) => {
  const { name, type, formik, placeholder } = props;
  return (
    <>
      <input
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className="form-control"
        id={name}
        placeholder={placeholder}
        style={{
          border: `1.5px solid ${
            formik.touched[name] && formik.errors[name]
              ? "rgb(200, 23, 23)"
              : "#01256033"
          }`,
        }}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-danger error">{formik.errors[name]}</div>
      ) : (
        <div className="error2"></div>
      )}
    </>
  );
};

export default TextInput;
