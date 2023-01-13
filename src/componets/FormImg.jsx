import PropTypes from "prop-types";

const FormImg = ({ handleSubmit, escrito }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="w-75">
          Buscar:{" "}
          <input
            className="w-100"
            type="text"
            name="inputText"
            placeholder=" Que buscas ?"
          />
          {""}
        </label>
        <button type="submit" className="btn btn-warning m-2">
          <span className="material-icons">Buscar</span>
        </button>
      </form>
    </>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
  escrito: PropTypes.func,
  handleClick: PropTypes.func,
};

export default FormImg;
