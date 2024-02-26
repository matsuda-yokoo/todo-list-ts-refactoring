import { atom } from 'recoil';


//Todo型定義
type Todo={
  id:number
  title:string
  isComplete:boolean
}

//todoListの中身の情報を保持するatomを定義
export const todoListState = atom<Todo[]>({
    key: "todoListState",
    default: [],
});

//todoListのステータス情報を保持するatomを定義
export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "すべて"
});