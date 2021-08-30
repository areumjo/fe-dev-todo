import React from 'react';

function Completed ( props ) {

    const { todoList, setTodoList, toggleClass } = props;

    let completedList = todoList.filter(i => i.active === false);

    const deleteTodo = e => {
        let newList = todoList.filter(i => i.todo !== e);
        console.log(newList);
        setTodoList(newList);
    }

    const deleteAll = () => {
        let newActiveList = todoList.filter(i => i.active === true);
        setTodoList(newActiveList);
    }

    return(
        <>
            {completedList.map(i =>
                <div className="flex-row">
                    <p className={i.active ? "active-todo" : "completed-todo"} value={i.todo} onClick={() => toggleClass(i.todo)}>✅ {i.todo}</p>
                    <p onClick={() => deleteTodo(i.todo)}>🗑</p>
                </div>
                )}

            <button onClick={deleteAll} className="delete-all-button">🗑 delete all</button>
        </>
    )
}

export default Completed;