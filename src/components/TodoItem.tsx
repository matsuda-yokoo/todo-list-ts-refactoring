import { Todo } from '../types/todo';
import { useTodoItemActions } from '../hooks/useTodoItemActions'; //ロジックのインポート

//itemの型定義
interface ItemProps {
    item:Todo;
 }

 //完了・未完了切り替えボタン、削除ボタンの見た目部分
 //ロジックはhooks/useTodoItemActions.tsに記述。
const TodoItem:React.FC<ItemProps>=({ item })=>{
  const {deleteItem,toggleItemCompletion} = useTodoItemActions();

    return (
      <>
        <div>
        <button onClick={()=>toggleItemCompletion(item)} className="toggle-completion">
            {item.isComplete? '完' : '未'} {/*trueなら'完'、falseなら'未'*/}
        </button>
         {item.title}
         <button onClick={()=>deleteItem(item.id)} className="delete-item">
            削除
         </button>
        </div>
      </>
    );
}

export default TodoItem;