import { selector } from 'recoil';
import { todoListFilterState, todoListState } from './atom';
import { Todo } from '../types/todo';


const FILTER_COMPLETED = '完了';
const FILTER_INCOMPLETED = '未完了';

//todoリストの統計情報を計算するヘルパー関数
const calculateTodoListStats = (todoList:Todo[]) => {
    const total = todoList.length;
    const Completed = todoList.filter(item=>item.isComplete).length; 
    const Uncompleted = total - Completed;
    return {
        total,
        Completed,
        Uncompleted,
    };
}

//atom(todoListState)に対する操作セレクタ
//stats:統計情報。ここでは登録数の統計を表す。
export const todoListStatsState = selector({
    key: 'todoListStatsState',
    //get:参照先を元に新しい値を作成する
    get: ({ get }) =>{
        const todoList = get(todoListState);  //todoListのatomを参照
        return calculateTodoListStats(todoList);
    },
  });

  //atom(todoListFilterState)に対する操作セレクタ
  export const filteredTodoListStatsState = selector({
    key:'filteredTodoListStatsState',
    get: ({ get })=>{
        const filter = get(todoListFilterState);  //filter情報のatomを参照
        const list = get(todoListState);  //todoListのatomを参照

        //選択されたfilterごとに場合分けして該当するfilterのtodoを返す
        switch (filter){
            case FILTER_COMPLETED:
                return list.filter((item)=>item.isComplete);
            case FILTER_INCOMPLETED:
                return list.filter((item)=>!item.isComplete);       
            default:
                return list;     
        }
    }
  });