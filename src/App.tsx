import "./Style.css";
import { useReducer } from "react";
import { counterReducer } from "./counterReducer";
import { Header, Control } from "./Components";
import { CounterType } from "./counter.types";

const initialState: CounterType = {
  count: 0,
  status: "Begin",
};

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="App">
      <Header state={state} />
      <Control state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
