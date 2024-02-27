// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom";
import JH from "./components/JH.tsx";
import JS from "./components/JS.tsx";
import YJ from "./components/YJ.tsx";
// import {create} from "zustand";

// interface CounterState {
//     count: number;
//     increase: () => void;
//     decrease: () => void;
// }

// const useCounterStore = create<CounterState>((set) => ({
//     count: 0,
//     increase: () => set((state) => ({ count: state.count + 1 })),
//     decrease: () => set((state) => ({ count: state.count - 1 })),
// }));

function App() {
  // const count = useCounterStore((state) => state.count)
  // const increaseCount = useCounterStore(state => state.increase)
  // const [input, setInput] = useState('')
  // const inputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(e.target.value)
  // }
  return (

    <Routes>
      <Route path="/JH" element={<JH/>} />
      <Route path="/JS" element={<JS/>} />
      <Route path="/YJ" element={<YJ/>} />
    </Routes>
  )
}

export default App

//
//
//