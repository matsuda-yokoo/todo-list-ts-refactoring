import React from "react";
import Button from '@mui/material/Button';

const EditForm = ({currentTodo,setIsEditing,onEditFormSubmit,onEditInputChange})=>{
    return(
        <form onSubmit={onEditFormSubmit}>
            <h2>Edit Todo</h2>
            <label htmlFor="editTodo">Edit todo: </label>
            <div className="form-button">
            <input
                name="editTodo"
                type="text"
                placeholder="ここに入力してください"
                value={currentTodo.text}
                onChange={onEditInputChange}
            /> 
            <div className="buttons">
            <Button variant="outlined" type="update-button">Update</Button>
            <Button variant="outlined" onClick={() => setIsEditing(false)} type="cancel-button">Cancel</Button>
            </div>
            </div>
        </form>
    )
}
export default EditForm;