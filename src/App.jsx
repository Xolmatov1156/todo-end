import React from "react";
import TodoForm from "./components/TodoForm";
import { TodoContext } from "./Contexts/Context";

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-screen w-screen items-center px-5 py-24 bg-black"></div>
      <TodoContext>
        <TodoForm />
      </TodoContext>
    </>
  );
}

export default App;
