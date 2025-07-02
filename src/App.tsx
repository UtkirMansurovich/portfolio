import { useState } from 'react'
import './App.css'
import {BrowserRouter} from "react-router-dom";
import {RoutesComponent} from "./routes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <RoutesComponent/>
    </BrowserRouter>
  )
}

export default App
