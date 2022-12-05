import React from "react";
import { useEffect } from "react";
import { useRef } from "react";




function App() {

  const inputRef = useRef();

  useEffect(() => {

    // console.log(inputRef.current)

    inputRef.current.focus();

  }, [])


  return (

    <input ref={inputRef} type="text" placeholder="Enter Your Name Here" />

  );


}

export default App;











