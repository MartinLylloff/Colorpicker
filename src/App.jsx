import Form from "./components/Form";
import ColorList from "./components/ColorList";
import Values from "values.js";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [color, setColor] = useState(new Values("#f15025").all(10));

  const handleSetColor = (color) => {
    if (!color) {
      toast.error("Please enter valid value");
      return;
    }
    try {
      const newColors = new Values(color).all(10);
      setColor(newColors);
      toast.success(color + " added");
    } catch (error) {
      toast.error("Color is not valid");
    }
  };

  return (
    <section>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        closeOnClick
        transition={Bounce}
      />
      <Form setTheColor={handleSetColor} />
      <ColorList colors={color} />
    </section>
  );
};
export default App;
