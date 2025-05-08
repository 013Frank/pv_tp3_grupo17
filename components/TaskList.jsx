import React, { useState } from "react";

function TaskList({ list, setlist }) {
    const [completed, setCompleted] = useState([]);

    return(
    <ul>
        {list.map((l, li) =>
            <li key={`li_${li}`}>
                <span style={{ textDecoration: completed.includes(l) ? "line-through" : "none" }}>{l}</span>
                <button onClick={() => {
                    if (completed.includes(l)) {
                        setCompleted(completed.filter(item => item !== l));
                    } else {
                        setCompleted([...completed, l]);
                    }
                }}>
                    {completed.includes(l) ? "Desmarcar" : "Realizada"}
                </button>
                <button onClick={() => setlist(list.filter(x => x !== l))}>Eliminar</button>
            </li>
        )}
    </ul>
    )
}
export default TaskList;
