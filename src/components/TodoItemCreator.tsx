import {useState} from 'react';
import { useTodoCreateAction } from '../hooks/useTodoCreateAction';

//todo追加機能
function TodoItemCreator(){  
     const [title,setTitle]=useState('');

      //inputに入力された値をtitleのstateに格納
      const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value);
      };

      const addItem = useTodoCreateAction();

      return (
        <div  className="add-item">
            <input type="text" value={title} onChange={handleChange}/>
            <button onClick={()=>addItem}>追加</button>
        </div>
      );
}

export default TodoItemCreator;

