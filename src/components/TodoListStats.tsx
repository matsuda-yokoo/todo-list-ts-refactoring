import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../utils/selector';

function TodoListStats(){
    //todoListStatsStateセレクタを引数にとり、useRecoilValueを用いて各登録todo数を取得する。
    const {totalNum,totalCompleteNum,totalUnCompleteNum} = useRecoilValue(todoListStatsState);
    return (
        <ul>
            <li>Todoの登録数:{totalNum}</li>
            <li>完了したTodoの数:{totalCompleteNum}</li>
            <li>未完了のTodoの数:{totalUnCompleteNum}</li>
        </ul>
    );
}

export default TodoListStats;