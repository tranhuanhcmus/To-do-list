import "./todoForm.css";
import { AiOutlinePlusCircle, AiFillSave } from "react-icons/ai";
const todoForm = ({ onChangeInput, value, handleSubmit, addMode }) => {
  return (
    <form id="input-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        onChange={(e) => onChangeInput(e)}
        required
        value={value}
      />
      <label>Task:</label>

      <button className="btn" type="submit">
        {addMode ? (
          <AiOutlinePlusCircle></AiOutlinePlusCircle>
        ) : (
          <AiFillSave></AiFillSave>
        )}
      </button>
    </form>
  );
};
export default todoForm;
