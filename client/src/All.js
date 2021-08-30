import React from 'react';

function All ( props ) {

    const { todoList, toggleClass } = props;

    return(
        <>
            {todoList.map(i => <p className={i.active ? "active-todo" : "completed-todo"} value={i.todo} onClick={() => toggleClass(i.todo)}>✴️ {i.todo}</p>)}
        </>
    )
}

export default All;