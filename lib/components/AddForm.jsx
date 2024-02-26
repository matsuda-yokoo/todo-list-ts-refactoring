"use strict";
// import React from "react";
// import { Button } from "@mui/material";
// import { todoState } from "../utils/atom";
// import { useRecoilState } from "recoil";
// type AddFormProps={
//   todo: string
//   onAddFormSubmit: (e:React.FormEvent<HTMLFormElement>)=>void
//   onAddInputChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
// } 
// export const AddForm = () =>{
//   const [todo,setTodo] = useRecoilState(todoState);
//   return console.log(todo);
// }
// // const AddForm:React.FC<AddFormProps> = ({todo,onAddFormSubmit,onAddInputChange})=>{
// //     return(
// //     <form onSubmit={onAddFormSubmit}>
// //           <h2>Add Todo</h2>
// //           <label htmlFor="todo">Add todo: </label>
// //           <div className="formAndButton">
// //           <input
// //             name="todo"
// //             type="text"
// //             placeholder="ここに入力してください"
// //             value={todo}
// //             onChange={onAddInputChange}
// //           />
// //           <Button variant="outlined" id="submit" type="submit">Add</Button>
// //           </div>
// //         </form>
// //     )
// // }
// // export default AddForm;
