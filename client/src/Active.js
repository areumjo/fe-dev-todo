import React from 'react';

function Active (props) {
    const { todoList, toggleClass } = props;

    const activeList = todoList.filter(i => i.active === true);

    return(
        <>
            {activeList.map(i => <p className={i.active ? "active-todo" : "completed-todo"} value={i.todo} onClick={() => toggleClass(i.todo)}>⚛️ {i.todo}</p>)}
        </>
    )
}

export default Active;