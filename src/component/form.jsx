import React, { useState } from "react";
import Todos from "./Todos";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos, inputValue);

  function submitButton(event) {
    event.preventDefault();
    setInputValue("");
    setTodos([...todos, { value: inputValue, clicked: false }]);
  }
  return (
    <div className="text-center bg-white ">
      <div className="mt-12 bg-yellow-300 shadow-lg h-14">
        <form className="flex items-center justify-center h-full gap-4 ">
          <input
            className="h-8 pl-2 rounded focus:outline-none"
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Enter New Todo"
            value={inputValue}
          />
          <button
            className="p-1 px-2 text-white bg-green-400 rounded"
            onClick={submitButton}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Form;
