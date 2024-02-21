"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const AddForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {
    return (<form onSubmit={onAddFormSubmit}>
          <h2>Add Todo</h2>
          <label htmlFor="todo">Add todo: </label>
          <div className="formAndButton">
          <input name="todo" type="text" placeholder="ここに入力してください" value={todo} onChange={onAddInputChange}/>
          <material_1.Button variant="outlined" type="submit">Add</material_1.Button>
          </div>
        </form>);
};
exports.default = AddForm;
