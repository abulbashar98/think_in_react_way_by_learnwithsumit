import React, { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import Button from "./Components/Button";
import ShowCount from "./Components/ShowCount";
import Title from "./Components/Title";




function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  const isEvenOrOdd = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {

    }
    return count1 % 2 === 0;

  }, [count1])


  //  This is when Call Back uses a Dependency,depends on a global variable 
  // const incrementByOne = useCallback(() => {
  //   setCount1(count1 + 1)
  // }, [count1])
  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1)
  }, [])


  //  This is when Call Back uses a Dependency,depends on a global variable
  // const incrementByFive = useCallback(() => {
  //   setCount2(count2 + 5)
  // }, [count2])
  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5)
  }, [])

  return (

    <>
      <Title title="(React.memo) (useCallback) and (useMemo) Tutorial" />
      <ShowCount title="Counter 1" count={count1} />
      <p>{isEvenOrOdd ? "Even" : "Odd"}</p>
      <Button incrementCount={incrementByOne}>Increment By One</Button>
      <hr />
      <Title></Title>
      <ShowCount title="Counter 2" count={count2} />
      <Button incrementCount={incrementByFive}>Increment By Five</Button>
    </>


  );


}

export default App;











