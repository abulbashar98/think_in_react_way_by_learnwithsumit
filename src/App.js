import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Input from "./Components/Input";




function App() {

  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef.current)
    inputRef.current.focus();
  }, [])


  return (

    <Input ref={inputRef} type="type" placeholder="Enter Your Name" />

  );


}

export default App;











