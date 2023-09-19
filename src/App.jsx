import { useState } from "react";
import "./index.css";

function App() {

  const [task, setTask ] = useState();
  const [dark, setDark ] = useState(true);

  return (
    <div >
      <div>
      <input type="text" name="task" id="task" className="block w-full items-center rounded-md border-1 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6" placeholder="Add new task" />
      </div>
      <h1>Todo</h1>
      
    </div>
  )
}

export default App
