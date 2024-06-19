import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Form = ({ setTheColor }) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTheColor(color);
  };

  return (
    <div className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="color"
            name="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <label htmlFor="text"></label>
          <input
            type="text"
            name="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
