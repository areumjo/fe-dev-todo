import './App.css';
import React, { useState } from 'react';
import All from './All';
import Active from './Active';
import Completed from './Completed';

function App() {

  const [linkState, setLinkState] = useState("all");

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([{ todo: "Coding Challenge", active: true }]);
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
    setTodoList(newTodoList)
    setIsActive(!isActive)
  }

  return (
    <div className="App">
      <p className="title-todo">#todo</p>
      <div className="link-div">
        <p onClick={() => setLinkState("all")} className={linkState === "all" ? "link-style" : "link-basic"}>All</p>
        <p onClick={() => setLinkState("active")} className={linkState === "active" ? "link-style" : "link-basic"}>Active</p>
        <p onClick={() => setLinkState("completed")} className={linkState === "completed" ? "link-style" : "link-basic"}>Completed</p>
      </div>
      <div className="todo-box-div flex-row">
        <input className="todo-box" placeholder="add details" value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={submitTodo} className="add-button">Add</button>
      </div>
      <div className="todo-list-div">
        {/* {todoList.map(i => <p className={i.active ? "active-todo" : "completed-todo"} value={i.todo} onClick={() => toggleClass(i.todo)}>{i.todo}</p>)} */}
        {linkState === "all" && <All todoList={todoList} toggleClass={toggleClass} />}
        {linkState === "active" && <Active todoList={todoList} toggleClass={toggleClass} />}
        {linkState === "completed" && <Completed todoList={todoList} setTodoList={setTodoList} toggleClass={toggleClass}/>}
      </div>
      <p>Click (toggle) your todo when you complete!</p>
    </div>
  );
}

export default App;
