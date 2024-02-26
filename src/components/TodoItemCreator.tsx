import {useState} from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../utils/atom';

type Todo={
    id:number
    title:string
    isComplete:boolean
  }

//todo追加機能
function TodoItemCreator(){  
      const [title,setTitle]=useState('');
      const setTodoList = useSetRecoilState(todoListState);  //todoListのsetter関数を取得
    
      //inputに入力された値をtitleのstateに格納
      const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value);
      };

      //todo追加機能
      const addItem = ()=>{
        setTodoList((oldTodoList:Todo[])=>[
          ...oldTodoList,
          {
            id:getId(),
            title:title,
            isComplete:false,
          },
        ]);
        setTitle('');
      };

      return (
        <div style={{ margin: '1rem 0'}}>
            <input type="text" value={title} onChange={handleChange}/>
            <button onClick={addItem}>Add</button>
        </div>
      )
}

export default TodoItemCreator;

//一意のkeyを設定    
let id = 1;
function getId(){
  return id++;
}