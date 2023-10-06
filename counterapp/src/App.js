import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setcounter] = useState(0);

  function decrementHandler() {
    setcounter(counter - 1);
  }

  function incrementHandler() {
    setcounter(counter + 1);
  }

  function resetHandler() {
    setcounter(0);
  }
  return (
    <div className="vh-100 vw-100 d-flex align-items-center justify-content-center text-center bg-dark text-white ">
      <div>
        <h3>increment & decrement</h3>
        <div className="d-flex justify-content-center fs-3 my-4">
          <div onClick={decrementHandler} className="px-4 py-2 border-end">
            -
          </div>
          <div className="px-4 py-2">{counter}</div>
          <div onClick={incrementHandler} className="px-4 py-2 border-start">
            +
          </div>
        </div>

        <button
          onClick={resetHandler}
          type="button"
          class="btn btn-danger px-4 py-2 "
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
