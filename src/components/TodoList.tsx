import "../styles/TodoItem.css";
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListFilterState} from "../utils/atom";
import  TodoListStats  from "./TodoListStats";
import TodoItem from './TodoItem';
import { filteredTodoListStatsState } from '../utils/selector';
import TodoItemCreator from './TodoItemCreator';
import { FilterOptions } from "../constants/FilterOptions";

//画面に表示するTodoListの部分
const TodoList=()=>{
  const todoList = useRecoilValue(filteredTodoListStatsState);
  const [filter,setfilter] = useRecoilState(todoListFilterState);

  const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setfilter(e.target.value as FilterOptions);
  };

  return (
    <>
    <h1>RecoilによるTodoアプリ</h1>
    <TodoListStats />
     <label htmlFor="todo-filter">フィルター:</label>
      <select id="todo-filter" value={filter} onChange={handleChange} aria-label="フィルター">
        <option value={FilterOptions.All}>{FilterOptions.All}</option>
        <option value={FilterOptions.Completed}>{FilterOptions.Completed}</option>
        <option value={FilterOptions.Uncompleted}>{FilterOptions.Uncompleted}</option>
      </select>
      <TodoItemCreator />
    {todoList.map((item)=>(
      <TodoItem key={item.id} item={item}/>
    ))}
    </>
  );
}

export default TodoList;