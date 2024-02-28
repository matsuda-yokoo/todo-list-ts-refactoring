import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../utils/atom";
import { Todo } from "../types/todo";


export const useTodoCreateAction = ()=>{ 
      const [title,setTitle]=useState('');
      const setTodoList = useSetRecoilState(todoListState);  //todoListのsetter関数を取得

      /*ID生成関数 (カプセル化)
      getIdを即時実行関数の結果として定義。
      ⇒外部スコープから直接idにアクセスできないようにする*/
      const getId = (()=>{
        let id = 0;
        return ()=> ++id;
      })();

      //todo追加機能
      const addItem = ()=>{
        //タイトルが空の場合は追加しない
        if (title.trim() === ''){
          return;
        }
        setTodoList((oldTodoList:Todo[])=>[
          ...oldTodoList,
          {
            id:getId(),
            title:title,
            isComplete:false,
          },
        ]);
        setTitle('');
    }

    return addItem;
    
};