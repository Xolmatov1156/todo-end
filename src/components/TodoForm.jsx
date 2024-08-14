import React, { useContext } from "react";
import { Context } from "../Contexts/Context";
import TodoList from "./TodoList/TodoList";

function TodoForm() {
  const { todos, saveTodo } = useContext(Context);

  function handleSubmitForm(evt) {
    evt.preventDefault();
    const todo = {
      id: Date.now(),
      title: evt.target.todoValue.value.trim(),
      isCompleted: false,
    };
    saveTodo(todo);
    evt.target.reset();
  }

  return (
    <>
      <form
        onSubmit={handleSubmitForm}
        autoComplete="off"
        className="w-[600px] bg-white h-[520px] overflow-y-auto rounded-lg p-5 flex flex-col gap-4 mt-[130px] mx-auto"
      >
        <div className="flex gap-3">
          <input
            type="text"
            className="w-full py-3 pl-2 rounded-md border-[2px] border-black outline-none"
            required
            name="todoValue"
            placeholder="Add your todo"
          />
          <button className="w-[30%] bg-sky-500 text-white font-bold rounded-lg p-3 hover:opacity-[70%] duration-300">
            Add
          </button>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            className="py-2 px-4 rounded-lg bg-sky-500 text-white"
          >
            All {todos.length}
          </button>
          <button
            type="button"
            className="py-2 px-4 rounded-lg bg-sky-500 text-white"
          >
            Completed {todos.filter((todo) => todo.isCompleted).length}
          </button>
          <button
            type="button"
            className="py-2 px-4 rounded-lg bg-sky-500 text-white"
          >
            Uncompleted {todos.filter((todo) => !todo.isCompleted).length}
          </button>
        </div>

        <div className="flex text-xs border-b w-full text-center mt-2 text-neutral-500 items-center justify-between font-bold border-black pb-2">
          <p className="min-w-[5%]">#</p>
          <p className="min-w-[10%]">Task Name</p>
          <p className="min-w-[10%]">Edit</p>
          <p className="min-w-[10%]">Remove</p>
          <p>Status</p>
        </div>

        <TodoList />
      </form>
    </>
  );
}

export default TodoForm;
