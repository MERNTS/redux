import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Todo = ({ content, index }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 330);

    return () => clearTimeout(timer);
  }, []);

  return (
    <li style={{ color: index % 2 === 0 ? "red" : "black" }}>
      Hello, {showContent && content}
    </li>
  );
};

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(["图雀", "图雀写作工具", "图雀社区", "图雀文档"]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todoList.map((todo, index) => (
          <Todo key={index} content={todo} index={index} />
        ))}
      </ul>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
