import React from "react";
import { Button } from "@mui/material";

const AddForm = ({todo,onAddFormSubmit,onAddInputChange})=>{
    return(
    <form onSubmit={onAddFormSubmit}>
          <h2>Add Todo</h2>
          <label htmlFor="todo">Add todo: </label>
          <div className="formAndButton">
          <input
            name="todo"
            type="text"
            placeholder="ここに入力してください"
            value={todo}
            onChange={onAddInputChange}
          />
          <Button variant="outlined" type="submit">Add</Button>
          </div>
        </form>
    )
}

export default AddForm;