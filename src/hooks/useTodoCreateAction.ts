import { useState } from "react";
import { useRecoilState, } from "recoil";
import { todoListState } from "../utils/atom";
import { Todo } from "../types/todo";


export const useTodoCreateAction = ()=>{ 
      const [title,setTitle]=useState('');
      const [todoList,setTodoList] = useRecoilState(todoListState);  //todoListのsetter関数を取得

      /*ID生成関数 (カプセル化)
      getIdを即時実行関数の結果として定義。
      ⇒外部スコープから直接idにアクセスできないようにする*/
      // const getId = (()=>{
      //   let id = 0;
      //   return ()=> ++id;
      // })();

      const generateId = () => {
        let maxId = 0;
        for(const todo of todoList){
          if(todo.id > maxId){
            maxId = todo.id;
          }
        }
        return maxId +1;
      };
      
  
      //todo追加機能
      const addItem = (inputTitle:string)=>{
        //タイトルが空の場合は追加しない
        if (inputTitle.trim() === ''){
          return;
        }
        setTodoList((oldTodoList:Todo[])=>[
          ...oldTodoList,
          {
            id:generateId(),
            title:inputTitle.trim(),
            isComplete:false,
          },
        ]);  
        setTitle('');            
    }

    return {addItem,title,setTitle};
    
};