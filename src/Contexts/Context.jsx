import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Context = createContext();

function TodoContext({ children }) {
  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || []);

  function saveTodo(obj) {
    if (todos.some((todo) => todo.title === obj.title)) {
      toast.error("Todo already exists!");
    } else {
      const newTodos = [...todos, obj];
      setTodos(newTodos);
      
      toast.success("Added todo!");
    }
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    
    toast.error("Todo Deleted!");
  }
  
  function updateTodo(id, newValue) {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, title: newValue } : item
    );
    setTodos(newTodos);
    
    toast.success("Todo Updated");
  }
  function completedTodo(id) {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
    
  }

  window.localStorage.setItem('todos', JSON.stringify(todos))

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Context.Provider
        value={{
          todos,
          setTodos,
          saveTodo,
          deleteTodo,
          updateTodo,
          completedTodo,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export { Context, TodoContext };
