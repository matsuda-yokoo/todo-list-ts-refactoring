"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const TodoList = ({ todo, onHandleEditClick, onHandleDeleteClick }) => {
    const filterOptions = [
        { value: 'notStarted', label: '未着手' },
        { value: 'inProgress', label: '作業中' },
        { value: 'done', label: '完了' },
    ];
    return (<li key={todo.id}>
            <span>{todo.id}</span>
            <span>{todo.text}</span>
            <select>
            {filterOptions.map(({ value, label }) => (<option value={value}>{label}</option>))}
            </select>
            <material_1.Button variant="outlined" onClick={() => onHandleEditClick(todo)}>Edit</material_1.Button>
            <material_1.Button variant="outlined" onClick={() => onHandleDeleteClick(todo.id)}>Delete</material_1.Button>
          </li>);
};
exports.default = TodoList;
