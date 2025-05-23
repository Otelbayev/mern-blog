import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Quill = ({ value, onChange }) => {
  return <ReactQuill theme="snow" value={value} onChange={onChange} />;
};

export default Quill;
