import { useEffect, useState } from "react";
import "./style.css";
import EditForm from "./components/EditForm";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

const App = ()=> {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddInputChange = (e)=> {
    setTodo(e.target.value);
  }

  const handleEditInputChange = (e)=> {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }

    setTodo("");
  }

  const handleEditFormSubmit = (e)=> {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  const handleDeleteClick = (id)=> {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  const handleUpdateTodo = (id, updatedTodo)=> {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  const handleEditClick = (todo)=> {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }


  return (
    <div className="App">
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

    <ul className="todo-list">
        {todos.map((todo) => (
          <TodoList
            todo={todo}
            onHandleEditClick={handleEditClick}
            onHandleDeleteClick={handleDeleteClick}
          />
        ))}
    </ul>
    </div>

  );
}

export default App;