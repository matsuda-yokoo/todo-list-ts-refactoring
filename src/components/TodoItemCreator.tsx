import {useState} from 'react';
import { useTodoCreateAction } from '../hooks/useTodoCreateAction';

//todo追加機能
function TodoItemCreator(){  
  
      //inputに入力された値をtitleのstateに格納
      const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value);
      };

      const {addItem,title,setTitle} = useTodoCreateAction();

      return (
        <div  className="add-item">
            <input type="text" value={title} onChange={handleChange}/>
            <button onClick={()=>addItem(title)}>追加</button>
        </div>
      );
}

export default TodoItemCreator;

