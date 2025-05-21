import {useState} from "react";
import styles from "./TaskInput.module.css";

const TaskInput = ({ list, setlist }) => {
    const [value, setvalue] = useState("");

    // Nueva función para renderizar la lista de tareas

    return (
        <div>
            <h1 className="title">NeonTasks</h1>
            <input
                placeholder="Agregar tarea"
                value={value}
                onChange={e => setvalue(e.target.value)}
            />
            <button
                onClick={() => {
                    if (value.trim() === "") {
                        alert("No se puede agregar una tarea vacía");
                        return;
                    }
                    setlist([...list, value]);
                    setvalue("");
                }}
            >
                Agregar
            </button>
            <hr />
        </div>
    );
}

export default TaskInput;