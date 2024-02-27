import {create} from "zustand";
import {useEffect, useState} from "react";
import {produce} from "immer";

interface CounterState {
    count: number;
    increase: () => void;
    decrease: () => void;
}

interface TodoStore {
  todos: [],
  addTodo: (todo:string) => void
}

interface Todo{
  id: number,
  content: string,
  completed: boolean,
}

const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
}));

const usetodoStore = create<TodoStore>(set => ({
  todos: [],
  addTodo: (todo) => set(produce(state => {
    state.todos.push(todo)
  }))
}));


const YJ = () => {
  const count = useCounterStore((state) => state.count)
  const increaseCount = useCounterStore(state => state.increase)
  const [input, setInput] = useState('')
  const inputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const [todos, setTodos] = useState<Todo[]>([])

  const todoStore = usetodoStore((state) => state.todos)
  const addStore = usetodoStore((state) => state.addTodo)
  const [input2, setInput2] = useState('')
  const inputChange2 = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value)
  }
  const addTododHandler = () => {
    addStore(input2)
    setInput2("")
  }

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch('http://localhost:3001/todos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data:Todo[] = await response.json();
        setTodos(data)
      } catch (error) {
        console.error("There was an error fetching the todos:", error);
      }
    };

    fetchingData();
  }, []);


  return (

    <div>
      <input value={input} onChange={inputChange}/>
      <button onClick={increaseCount}>{count}</button>

      <div>
        <ul>
          {todos.map((todo) => (
              <li key={todo.id}>{todo.content}</li> // Use todo.id for key and display todo.content
          ))}
        </ul>
      </div>

      <input value={input2} onChange={inputChange2}/>
      <button onClick={addTododHandler}>추가</button>
      <ul>
        {todoStore.map((todo, index) => (
            <li key={index}>{todo}</li> // Use todo.id for key and display todo.content
        ))}
      </ul>

    </div>
  )
}

export default YJ
