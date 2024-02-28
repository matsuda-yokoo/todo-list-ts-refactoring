import { atom } from 'recoil';
import { Todo } from '../types/todo';
import { FilterOptions } from '../constants/FilterOptions';

//todoListの中身の情報を保持するatomを定義
export const todoListState = atom<Todo[]>({
    key: "todoListState",
    default: [],
});

//todoListのステータス情報を保持するatomを定義
export const todoListFilterState = atom<FilterOptions>({
  key: "todoListFilterState",
  default: FilterOptions.All,
});