<h1> state reducers hook</h1>

Manage state in hooks by dispatching changes and passing in an array of stateReducers to modify the change.

<h1> usage </h1>

<a href="https://codesandbox.io/s/88rklxjx70">interactive example on code sandbox</a>

```js
import React from "react";
import useStateReducers from "state-reducers-hook";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [state, dispatch] = useStateReducers({ count: 0 }, [
    (state, change) => {
      if (change.type === "increment") {
        change.count = state.count + 5;
        return change;
      }
    },
    (state, change) => {
      if (change.type === "decrement") {
        change.count = state.count - 5;
      }
      return change;
    },
    (state, change) => {
      state.message = `the state was ${change.type}ed`;
    }
  ]);
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <h2>{state.message || "Hello!"}</h2>
      <button
        onClick={() =>
          dispatch({
            type: "increment"
          })
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement"
          })
        }
      >
        decrement
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
