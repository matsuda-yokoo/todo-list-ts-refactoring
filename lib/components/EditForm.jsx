"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const EditForm = ({ currentTodo, setIsEditing, onEditFormSubmit, onEditInputChange }) => {
    return (<form onSubmit={onEditFormSubmit}>
            <h2>Edit Todo</h2>
            <label htmlFor="editTodo">Edit todo: </label>
            <div className="formAndButton">
            <input name="editTodo" type="text" placeholder="ここに入力してください" value={currentTodo.text} onChange={onEditInputChange}/> 
            <div className="buttons">
            <Button_1.default variant="outlined" id="update-button" type="submit">Update</Button_1.default>   {/*type="update-button"*/}
            <Button_1.default variant="outlined" onClick={() => setIsEditing(false)} id="cancel-button">Cancel</Button_1.default>   {/*type="cancel-button"*/}
            </div>
            </div>
        </form>);
};
exports.default = EditForm;
