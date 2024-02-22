"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./style.css");
const EditForm_1 = __importDefault(require("./components/EditForm"));
const AddForm_1 = __importDefault(require("./components/AddForm"));
const TodoList_1 = __importDefault(require("./components/TodoList"));
const App = () => {
    const [todos, setTodos] = (0, react_1.useState)(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        }
        else {
            return [];
        }
    });
    const [todo, setTodo] = (0, react_1.useState)("");
    const [isEditing, setIsEditing] = (0, react_1.useState)(false);
    const [currentTodo, setCurrentTodo] = (0, react_1.useState)();
    //最大のidを見つけて、maxIdとする
    const generateId = () => {
        let maxId = 0;
        for (const todo of todos) {
            if (todo.id > maxId) {
                maxId = todo.id;
            }
        }
        return maxId + 1;
    };
    (0, react_1.useEffect)(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    const handleAddInputChange = (e) => {
        setTodo(e.target.value);
    };
    const handleEditInputChange = (e) => {
        setCurrentTodo(Object.assign(Object.assign({}, currentTodo), { text: e.target.value }));
        console.log(currentTodo);
    };
    const handleAddFormSubmit = (e) => {
        e.preventDefault();
        if (todo !== "") {
            setTodos([
                ...todos,
                {
                    id: generateId(),
                    text: todo.trim()
                }
            ]);
        }
        setTodo("");
    };
    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        handleUpdateTodo(currentTodo.id, currentTodo);
    };
    const handleDeleteClick = (id) => {
        const removeItem = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(removeItem);
    };
    const handleUpdateTodo = (id, updatedTodo) => {
        const updatedItem = todos.map((todo) => {
            return todo.id === id ? updatedTodo : todo;
        });
        setIsEditing(false);
        setTodos(updatedItem);
    };
    const handleEditClick = (todo) => {
        setIsEditing(true);
        setCurrentTodo(Object.assign({}, todo));
    };
    return (<div className="App">
      {isEditing && currentTodo ? (<EditForm_1.default currentTodo={currentTodo} setIsEditing={setIsEditing} onEditInputChange={handleEditInputChange} onEditFormSubmit={handleEditFormSubmit}/>) : (<AddForm_1.default todo={todo} onAddInputChange={handleAddInputChange} onAddFormSubmit={handleAddFormSubmit}/>)}

    <ul className="todo-list">
        {todos.map((todo) => (<TodoList_1.default todo={todo} onHandleEditClick={handleEditClick} onHandleDeleteClick={handleDeleteClick}/>))}
    </ul>
    </div>);
};
exports.default = App;
