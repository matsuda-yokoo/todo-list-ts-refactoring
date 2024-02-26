"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recoil_1 = require("recoil");
const atom_1 = require("../utils/atom");
const TodoItem = ({ item }) => {
    const [todoList, setTodoList] = (0, recoil_1.useRecoilState)(atom_1.todoListState);
    const deleteItem = () => {
        const index = todoList.findIndex((listItem) => listItem.id === item.id);
        const newTodoList = [
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1),
        ];
        setTodoList(newTodoList);
    };
    function toggleItemCompletion() {
        const index = todoList.findIndex((listItem) => listItem.id === item.id);
        const newTodoList = [
            ...todoList.slice(0, index),
            Object.assign(Object.assign({}, item), { isComplete: !item.isComplete }),
            ...todoList.slice(index + 1),
        ];
        setTodoList(newTodoList);
    }
    ;
    return (<div>
        <button onClick={toggleItemCompletion}>
            {item.isComplete ? '完' : '未'}
        </button>
         {item.title}
         <span onClick={deleteItem} style={{ cursor: 'pointer' }}>
            X
         </span>
        </div>);
};
exports.default = TodoItem;
