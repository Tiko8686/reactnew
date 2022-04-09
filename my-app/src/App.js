import "./App.css";
import { Routes, Route } from "react-router-dom";
import { First } from "./timer.js";
import {Second} from "./myForm.js"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<First />}></Route>
        <Route path="/2nd" element={<Second />}></Route>
      </Routes>
    </div>
  );
}

export default App;