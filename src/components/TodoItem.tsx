import { useRecoilState } from 'recoil';
import { todoListState } from '../utils/atom';

//todoListの中身の型定義
type Todo={
    id:number
    title:string
    isComplete:boolean
  }

  //itemの型定義
type Item = {
    item:Todo
 }

 //各todoに対する操作
const TodoItem:React.FC<Item>=({ item })=>{
    const [todoList,setTodoList] = useRecoilState(todoListState);

    //todo削除機能
    const deleteItem = ()=>{
        //findIndex:対象要素の配列番号を見つけるメソッド。
        const index = todoList.findIndex((listItem)=>listItem.id===item.id);
        //削除後の配列を定義   
        const newTodoList = [
            ...todoList.slice(0,index),  //削除するtodoの一つ前までのtodoリスト(indexは含まれない)
            ...todoList.slice(index + 1), //削除するtodoの一つ後ろからのtodoリスト(endの引数指定なし＝リストの最後まで)
        ];
        setTodoList(newTodoList);  //削除後の配列を格納
    };

    //完了・未完了の切替機能
    //大体削除機能と一緒
    const toggleItemCompletion=()=>{
        const index = todoList.findIndex((listItem)=>listItem.id === item.id);
        const newTodoList = [
            ...todoList.slice(0,index),  
            {...item,isComplete: !item.isComplete}, //対象todoのisCompleteプロパティを反転させる
            ...todoList.slice(index + 1),
        ];
        setTodoList(newTodoList);
    };

    return (
        <div>
        <button onClick={toggleItemCompletion}>
            {item.isComplete? '完' : '未'} {/*trueなら'完'、falseなら'未'*/}
        </button>
         {item.title}
         <span onClick={deleteItem} style={{cursor: 'pointer'}}>
            X
         </span>
        </div>
    );
}

export default TodoItem;