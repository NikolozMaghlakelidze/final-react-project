import { useState, useEffect } from 'react';
import './todolist.css'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
 const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(todos.length);
  }, [todos]);

  const damateba = () => {
    // console.log('daemata todo');
    setTodos([...todos, input]);
    setInput('');
  };

  const washla = (index) => {
    // console.log('waishala todo');
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <p className='todo_p'>todo-list</p>
      <h2 className='todo_h'> {count} list</h2>
      <input
        value={input}
        onChange={(damateba) => setInput(damateba.target.value)}
      />
      <button onClick={damateba} className='todo_button'>add to-do</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className='todos_li'>
            {todo}
            <button className='todo_button2' onClick={() => washla(index)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;