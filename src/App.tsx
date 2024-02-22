import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent, } from "react";
import "./style.css";
import EditForm from "./components/EditForm";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

interface Todo{
  id: number
  text: string
}

const App =()=> {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = useState<Todo|undefined>();

  //最大のidを見つけて、maxIdとする
  const generateId = () => {
    let maxId = 0;
    for(const todo of todos){
      if(todo.id > maxId){
        maxId = todo.id;
      }
    }
    return maxId +1;
  };
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddInputChange =(e : ChangeEvent<HTMLInputElement>)=> {
    setTodo(e.target.value);
  }

  const handleEditInputChange =(e : ChangeEvent<HTMLInputElement>)=> {
    setCurrentTodo({ ...currentTodo!, text: e.target.value });
    console.log(currentTodo);
  }

  const handleAddFormSubmit =(e : FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    console.log("handleAddFormSubmitに入りました");
    
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
  }

  const handleEditFormSubmit = (e : React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();

    handleUpdateTodo(currentTodo!.id, currentTodo);
  }

  const handleDeleteClick = (id: number)=> {
    const removeItem = todos.filter((todo:Todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  const handleUpdateTodo = (id:number, updatedTodo:any)=> {
    const updatedItem = todos.map((todo:Todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  const handleEditClick = (todo:Todo)=> {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }


  return (
    <div className="App">
      {isEditing && currentTodo ? (
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
        {todos.map((todo:Todo) => (
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