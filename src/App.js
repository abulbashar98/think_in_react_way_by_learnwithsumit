import React, { useState } from "react";
import MyComponentClass from "./Components/MyComponentClass";
import MyComponentFunctional from "./Components/MyComponentFunctional";



function App() {

  const [show, setShow] = useState(true);

  return (
    <>
      {show && <MyComponentFunctional></MyComponentFunctional>}
      <button onClick={() => setShow((prevShow) => !prevShow)}>{show ? "Hide Post" : "Show Post"}</button>
    </>
  );


}

export default App;











