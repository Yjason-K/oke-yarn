import './App.css'
import {Route, Routes} from "react-router-dom";
import JH from "./components/JH.tsx";
import JS from "./components/JS.tsx";
import YJ from "./components/YJ.tsx";

function App() {
  return (

    <Routes>
      <Route path="/JH" element={<JH/>} />
      <Route path="/JS" element={<JS/>} />
      <Route path="/YJ" element={<YJ/>} />
    </Routes>
  )
}

export default App