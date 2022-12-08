import React, { useReducer } from "react";
import ComponentOne from "./Components/ComponentOne";


export const counterContext = React.createContext();

// array.prototype.reduce() take initialValue 
const initialState = 0;

const reducer = (state, action) => {

  switch (action) {

    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;

  }
}
function App() {

  const [count, dispatch] = useReducer(reducer, initialState);


  return (
    <div>
      <h1>Count = {count}</h1>
      <counterContext.Provider value={{ countDispatch: dispatch }}>
        <ComponentOne />
      </counterContext.Provider>
    </div>
  );


}

export default App;











