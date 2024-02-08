import React from "react";
import { Button } from "@mui/material";

const TodoList =({todo,onHandleEditClick,onHandleDeleteClick})=>{
    const filterOptions = [
        { value: 'all', label: 'すべて' },
        { value: 'notStarted', label: '未着手' },
        { value: 'inProgress', label: '作業中' },
        { value: 'done', label: '完了' },
      ];
    
    return (
          <li key={todo.id}>
            <span>{todo.id}</span>
            <span>{todo.text}</span>
            <select>
            {filterOptions.map(({ value, label }) => (
              <option value={value}>{label}</option>
            ))}
            </select>
            <Button variant="outlined" onClick={() => onHandleEditClick(todo)}>Edit</Button>
            <Button variant="outlined"onClick={() => onHandleDeleteClick(todo.id)}>Delete</Button>
          </li>
)}
export default TodoList;