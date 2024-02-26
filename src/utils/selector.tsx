import { selector } from 'recoil';
import { todoListFilterState, todoListState } from './atom';

//atom(todoListState)に対する操作セレクタ
//stats:統計情報。ここでは登録数の統計を表す。
export const todoListStatsState = selector({
    key: 'todoListStatsState',
    //get:参照先を元に新しい値を作成する
    get: ({ get }) =>{
        const todoList = get(todoListState);  //todoListのatomを参照
        const totalNum = todoList.length;  //totalのtodo数
        const totalCompleteNum = todoList.filter((item)=>
        item.isComplete).length;  //完了したtodo数
        const totalUnCompleteNum = totalNum - totalCompleteNum; //完了していないtodo数
        //3つの値を返す
        return {
            totalNum,
            totalCompleteNum,
            totalUnCompleteNum,
        };
    },
  });

  //atom(todoListFilterState)に対する操作セレクタ
  export const filteredTodoListState = selector({
    key:'filteredTodoListState',
    get: ({ get })=>{
        const filter = get(todoListFilterState);  //filter情報のatomを参照
        const list = get(todoListState);  //todoListのatomを参照

        //選択されたfilterごとに場合分けして該当するfilterのtodoを返す
        switch (filter){
            case '完了':
                return list.filter((item)=>item.isComplete);
            case '未完了':
                return list.filter((item)=>!item.isComplete);       
            default:
                return list;     
        }
    }
  });