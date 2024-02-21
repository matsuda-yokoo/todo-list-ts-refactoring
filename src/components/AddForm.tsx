import React from "react";
import { Button } from "@mui/material";

interface Todo{
  id: number
  text: string
}

type AddFormProps={
  todo: Todo
  onAddFormSubmit: (e:React.FormEvent<HTMLFormElement>)=>void
  onAddInputChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
} 

const AddForm:React.FC<AddFormProps> = ({todo,onAddFormSubmit,onAddInputChange})=>{
    return(
    <form onSubmit={onAddFormSubmit}>
          <h2>Add Todo</h2>
          <label htmlFor="todo">Add todo: </label>
          <div className="formAndButton">
          <input
            name="todo"
            type="text"
            placeholder="ここに入力してください"
            value={todo.text}
            onChange={onAddInputChange}
          />
          <Button variant="outlined" type="submit">Add</Button>
          </div>
        </form>
    )
}

export default AddForm;