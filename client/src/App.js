import './App.css';
import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([{ todo: "", active: true }]);
  const [isActive, setIsActive] = useState(true);

  const submitTodo = () => {
    const newTodoList = todoList.concat({ todo: input, active: true });
    setTodoList(newTodoList)
    setInput("")
  }

  const toggleClass = e => {
    let newTodoList = todoList;
    for (let i=0; i<newTodoList.length; i++) {
      if (newTodoList[i]["todo"] === e) {
        newTodoList[i]["active"] = !newTodoList[i]["active"]
      }
    }
    console.log(newTodoList, 'isActive', isActive)
    setTodoList(newTodoList)
    setIsActive(!isActive)
  }




  return (
    <div className="App">
      <p className="title-todo">#todo</p>
      <div>
        <input id="todo-box" placeholder="add details" value={input} onChange={e => setInput(e.target.value)}/>
        <button onClick={submitTodo}>Add</button>
      </div>
      <div>
        {todoList.map(i => <p className={i.active ? "active-todo" : "completed-todo"} value={i.todo} onClick={() => toggleClass(i.todo)}>{i.todo}</p>)}
      </div>
    </div>
  );
}

export default App;
