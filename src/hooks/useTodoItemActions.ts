import { useRecoilState } from 'recoil';
import { todoListState } from '../utils/atom';
import { Todo } from '../types/todo';

//カスタムフック
export const useTodoItemActions = () => {
    const [todoList,setTodoList] = useRecoilState(todoListState);
    
    //完了・未完了の切り替え
    const toggleItemCompletion = (item:Todo) => {
        //更新対象のtodoはisCompleteを反転させ、その他は元のままの新しい配列を作成
        const newTodoList = todoList.map((listItem) =>
        listItem.id === item.id ? {...item,isComplete: !item.isComplete} : listItem
      );
      setTodoList(newTodoList);
    };
    
    //削除
    const deleteItem = (id:number) => {
        setTodoList(todoList.filter((listItem) => listItem.id !== id));
    };

    //オブジェクトで全部返す
    //後で分割代入して使う
    return {
        deleteItem,
        toggleItemCompletion
    };

};
