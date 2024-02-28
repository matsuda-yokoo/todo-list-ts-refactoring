import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../utils/selector';

function TodoListStats(){
    //todoListStatsStateセレクタを引数にとり、useRecoilValueを用いて各登録todo数を取得する。
    const {total,Completed,Uncompleted} = useRecoilValue(todoListStatsState);
    return (
        <ul>
            <li>Todoの登録数:{total}</li>
            <li>完了したTodoの数:{Completed}</li>
            <li>未完了のTodoの数:{Uncompleted}</li>
        </ul>
    );
}

export default TodoListStats;