import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const saveHex = (async) => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText("#" + color.hex);
        toast.success(color.hex + " copied to clipboard");
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };
  console.log(index);
  const { hex, weight } = color;
  return (
    <div
      className={index > 10 ? "color color-light" : "color"}
      onClick={saveHex}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}%</p>
    </div>
  );
};
export default SingleColor;
