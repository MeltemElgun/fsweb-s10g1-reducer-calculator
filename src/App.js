import React from "react";
import { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers/index";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryPlus,
  memoryTotal,
  memoryClear,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);

  function handleApply(e) {
    dispatch(applyNumber(e));
  }

  function handleOperation(e) {
    dispatch(changeOperation(e));
  }
  function handleClear(e) {
    dispatch(clearDisplay(e));
  }
  function handleMemoryPlus(e) {
    dispatch(memoryPlus(e));
  }
  function handleMemoryTotal(e) {
    dispatch(memoryTotal(e));
  }
  function handleMemortClear(e) {
    dispatch(memoryClear(e));
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b>
                {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleMemoryPlus()} value={"M+"} />
              <CalcButton onClick={() => handleMemoryTotal()} value={"MR"} />
              <CalcButton onClick={() => handleMemortClear()} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApply(1)} value={1} />
              <CalcButton onClick={() => handleApply(2)} value={2} />
              <CalcButton onClick={() => handleApply(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApply(4)} value={4} />
              <CalcButton onClick={() => handleApply(5)} value={5} />
              <CalcButton onClick={() => handleApply(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApply(7)} value={7} />
              <CalcButton onClick={() => handleApply(8)} value={8} />
              <CalcButton onClick={() => handleApply(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperation("+")} value={"+"} />
              <CalcButton onClick={() => handleOperation("*")} value={"*"} />
              <CalcButton onClick={() => handleOperation("-")} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => handleClear()} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
