import './App.css'
import {Route, Routes} from "react-router-dom";
import JH from "./components/JH.tsx";
import JS from "./components/JS.tsx";
import YJ from "./components/YJ.tsx";
import SM from "./components/SM.tsx";
import JY from "./components/JY.tsx";

function App() {
  return (

    <Routes>
      <Route path="/JH" element={<JH/>} />
      <Route path="/JS" element={<JS/>} />
      <Route path="/YJ" element={<YJ/>} />
      <Route path="/SM" element={<SM/>} />
      <Route path="/JY" element={<JY/>} />
    </Routes>
  )
}

export default App