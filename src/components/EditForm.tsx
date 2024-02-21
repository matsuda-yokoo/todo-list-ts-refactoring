import React, { useState } from "react";
import Button from '@mui/material/Button';

interface Todo{
    id: number
    text: string
  }
  
  type EditFormProps={
    currentTodo: Todo
    setIsEditing: (arg0: boolean)=>void
    onEditFormSubmit: (e:React.FormEvent<HTMLFormElement>)=>void
    onEditInputChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
  } 


const EditForm:React.FC<EditFormProps> = ({currentTodo,setIsEditing,onEditFormSubmit,onEditInputChange})=>{
    return(
        <form onSubmit={onEditFormSubmit}>
            <h2>Edit Todo</h2>
            <label htmlFor="editTodo">Edit todo: </label>
            <div className="formAndButton">
            <input
                name="editTodo"
                type="text"
                placeholder="ここに入力してください"
                value={currentTodo.text}
                onChange={onEditInputChange}
            /> 
            <div className="buttons">
            <Button variant="outlined" >Update</Button>   {/*type="update-button"*/}
            <Button variant="outlined" onClick={() => setIsEditing(false)}>Cancel</Button>   {/*type="cancel-button"*/}
            </div>
            </div>
        </form>
    )
}
export default EditForm;