import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListFilterState} from "../utils/atom";
import  TodoListStats  from "./TodoListStats";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from './TodoItem';
import { filteredTodoListState } from '../utils/selector';

//画面に表示するTodoListの部分
const TodoList=()=>{
  const todoList = useRecoilValue(filteredTodoListState);
  const [filter,setfilter] = useRecoilState(todoListFilterState);

  const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setfilter(e.target.value);
  };

  return (
    <>
    <h1>RecoilによるTodoアプリ</h1>
    <TodoListStats />
    <select value={filter} onChange={handleChange}> 
      <option value="すべて">すべて</option>
      <option value="完了">完了</option>
      <option value="未完了">未完了</option>
    </select>
    <TodoItemCreator />
    {todoList.map((item)=>(
      <TodoItem key={item.id} item={item}/>
    ))}
    </>
  );
}

export default TodoList;