import React from 'react';
import ReactDOM from 'react-dom';

// import reportWebVitals from './reportWebVitals';

let states = [] // [0: [value,setterFunc], 1: [value,setterFunc]]
let stateIndex = -1;

function useState(defaultValue) {
  const index = ++stateIndex;

  if (states[index]) return states[index]

  const setValue = (newValue) => {

    states[index][0] = newValue;
    renderWithAbulBashar();

  }

  const returnArray = [defaultValue, setValue];
  states[index] = returnArray;
  return returnArray;

}



const App = () => {

  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState(null);


  const style = { width: '50%', marginLeft: '500px' }

  const handleChange = (e) => {

    const inputValue = e.target.value;

    const warning = inputValue.includes(".js") ? "You need Advanced JavaScript skill to Handle this, Do you have it??" : null

    setTodo(inputValue);
    setWarning(warning);
  }



  return (
    <div style={style}>
      <h2>{todo}</h2>
      <textarea onChange={handleChange} name="input" id="" ></textarea>
      <h1>{warning || "Good Choice!"}</h1>

    </div>
  );
};


function renderWithAbulBashar() {
  stateIndex = -1;
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
renderWithAbulBashar();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
