"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recoil_1 = require("recoil");
const atom_1 = require("../utils/atom");
const TodoListStats_1 = __importDefault(require("./TodoListStats"));
const TodoItemCreator_1 = __importDefault(require("./TodoItemCreator"));
const TodoItem_1 = __importDefault(require("./TodoItem"));
const selector_1 = require("../utils/selector");
//画面に表示するTodoListの部分
const TodoList = () => {
    const todoList = (0, recoil_1.useRecoilValue)(selector_1.filteredTodoListState);
    const [filter, setfilter] = (0, recoil_1.useRecoilState)(atom_1.todoListFilterState);
    const handleChange = (e) => {
        setfilter(e.target.value);
    };
    return (<>
    <h1>RecoilによるTodoアプリ</h1>
    <TodoListStats_1.default />
    <select value={filter} onChange={handleChange}> 
      <option value="すべて">すべて</option>
      <option value="完了">完了</option>
      <option value="未完了">未完了</option>
    </select>
    <TodoItemCreator_1.default />
    {todoList.map((item) => (<TodoItem_1.default key={item.id} item={item}/>))}
    </>);
};
exports.default = TodoList;
