import React,{useState}from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';

const style = {
  bg: 'h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#56CCF2]',
  container: 'bg-slate-100 max-w-[500px] w-full mx-auto p-4 rounded-lg shadow-lg',
  heading : 'text-3xl font-bold text-center text gray-800 p-2',
  form: 'flex justify-between',
  input: 'border p-2 w-full text-xl',
  button: 'border p-4 ml-2 bg-purple-500 text-slate-100',
  count: 'text-center text-gray-800 p-2',
}


function App(){
  const [todos, setTodos] = useState(['Learn React', 'Learn Firebase', 'Learn Tailwind CSS']);
   


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>TO-DO APP</h3>
        <form className={style.form}>
          <input type="text" className={style.input} placeholder="Add a task" />
          <button className={style.button}><AiOutlinePlus size={30}/> </button>
        </form>
        <ul>
          {todos.map((todo,index) => (
            <Todo key={index} todo={todo} />


          ))}
          

        </ul>

        <p className={style.count}> You have 2 more Todos</p>

      </div>

    </div>
  );
          }

export default App;
