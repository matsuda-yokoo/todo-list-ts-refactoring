import React from "react";
import { Button } from "@mui/material";

interface Todo{
  id: number
  text: string
}

type TodoListProps={
  todo: Todo
  onHandleEditClick: (todo:Todo)=>void
  onHandleDeleteClick: (id:number)=>void
} 

const TodoList:React.FC<TodoListProps> =({todo,onHandleEditClick,onHandleDeleteClick})=>{
    const filterOptions = [
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
            <Button variant="outlined" onClick={() => onHandleEditClick(todo)} id="button">Edit</Button>
            <Button variant="outlined"onClick={() => onHandleDeleteClick(todo.id)} id="button">Delete</Button>
          </li>
)}
export default TodoList;