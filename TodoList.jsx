import { useState } from 'react';
export default function TodoList() {
    let[todos,setTodos] = useState([]);
    let[newTodo,setNewTodo] = useState("");
    let addNewTask = () =>{
        setNewTodo(newTodo);
        setTodos([...todos,newTodo]);
        setNewTodo("");
    }
    let updateTodoValue = (e) =>{
        setNewTodo(e.target.value);
    }
    return (
        <div>
            <input placeholder='text'  type="text" value={newTodo} onChange={updateTodoValue} ></input> <br />
            <br />
            <button onClick={addNewTask}>Add task</button>
            <br /><br />
            <hr />
            <h4>Task Todo</h4>
            <br />
            <ul>{
                todos.map((todo)=>{
                    return <li>{todo}</li>})
            }
                
            </ul>
        </div>
    );
}