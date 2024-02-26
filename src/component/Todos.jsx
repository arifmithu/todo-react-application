import React from "react";

function Todos({ todos, setTodos }) {
  function manageTodo(index) {
    todos.splice(index, 1);
    setTodos([...todos]);
  }
  function handleLineCut(index) {
    todos[index].clicked = !todos[index].clicked;
    setTodos([...todos]);
  }
  return (
    <div>
      {todos.map(({ value, clicked }, index) => {
        return (
          <div className="flex justify-between w-full pl-[500px] px-12 mt-2  text-center shadow-lg bg-slate-300">
            <h1
              onClick={() => handleLineCut(index)}
              className={`text-4xl font-bold cursor-pointer ${
                clicked ? "line-through " : ""
              }`}
            >
              {value}
            </h1>
            <button
              onClick={() => manageTodo(index)}
              className="px-2 py-1 text-white bg-red-500 rounded-md"
            >
              Delete Todo
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
