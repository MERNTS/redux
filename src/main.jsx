import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];

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
  return (
    <ul>
      {todoList.map((todo, index) => (
        <Todo key={index} content={todo} index={index} />
      ))}
    </ul>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);