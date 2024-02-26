"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const recoil_1 = require("recoil");
const atom_1 = require("../utils/atom");
function TodoItemCreator() {
    const [title, setTitle] = (0, react_1.useState)('');
    const setTodoList = (0, recoil_1.useSetRecoilState)(atom_1.todoListState);
    const handleChange = (e) => {
        setTitle(e.target.value);
    };
    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                title: title,
                isComplete: false,
            },
        ]);
        setTitle('');
    };
    return (<div style={{ margin: '1rem 0' }}>
            <input type="text" value={title} onChange={handleChange}/>
            <button onClick={addItem}>Add</button>
        </div>);
}
exports.default = TodoItemCreator;
let id = 1;
function getId() {
    return id++;
}
