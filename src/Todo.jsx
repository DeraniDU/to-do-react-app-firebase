import React from "react";
import { FaRegTrashAlt } from "react-icons/fa"; 

const style = {
    li: 'flex justify-between bg-slate-200 p-4 my-2 capitalize rounded-lg',
    row: 'flex',
    text: 'ml-2 cursor-pointer',
    textComplete: 'ml-2 cursor-pointer line-through',
    button: 'cursor-pointer flex items-center'
}

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li className={todo.completed ? style.textComplete : style.li}>
            <div className={style.row}>
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => toggleComplete(todo.id)} 
                />
                <p className={todo.completed ? style.textComplete : style.text}>
                    {todo.text}
                </p>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
        </li>
    );
}

export default Todo;
