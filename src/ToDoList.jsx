
import React, {useState} from "react";

function ToDoList() {
    
    const [task, setTask] = useState(["Eat Breakfast ", "Take a shower ","Walk a dog "]);
    const [newtask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newtask.trim() !== ""){
            setTask(t => [...t, newtask]);
        setNewTask("");
        }
    }

    function deleteTask(index) {
        const updateTasks = task.filter((_, i) => i !== index);
        setTask(updateTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updateTasks = [...task];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
            setTask(updateTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < task.length - 1) {
            const updateTasks = [...task];
            [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
            setTask(updateTasks);
        }
    }

    return(<div className="to-do-list">

        <h1>To-Do-List</h1>
        <div>
            <input type="text" name="" id="" placeholder="Enter a task ..." value={newtask} onChange={handleInputChange}/>
        </div>
        <button
        className="add-button"
        onClick={addTask}>
            Add
            </button>

    <ol>
        {task.map((task, index) => 
        <li key ={index}>
            <span className="text">{task}</span>
            <button className="delete-button"
            onClick={() => deleteTask(index)}>
                ❌
            </button>
            <button className="move-button"
            onClick={() => moveTaskUp(index)}>
                👆
            </button>
            <button className="move-button"
            onClick={() => moveTaskDown(index)}>
                👇
            </button>
        </li>
        )}
    </ol>

    </div>);

}

export default ToDoList