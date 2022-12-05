import React, { useState } from "react";
import Button from "./Components/Button";
import ShowCount from "./Components/ShowCount";
import Title from "./Components/Title";




function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = () => {
    setCount1((prevCount) => prevCount + 1)
  }

  const incrementByFive = () => {

    setCount2((prevCount) => prevCount + 5)

  }

  return (

    <>
      <Title title="(React.memo) (useCallback) and (useMemo) Tutorial" />
      <ShowCount title="Counter 1" count={count1} />
      <Button incrementCount={incrementByOne}>Increment By One</Button>
      <hr />
      <Title></Title>
      <ShowCount title="Counter 2" count={count2} />
      <Button incrementCount={incrementByFive}>Increment By Five</Button>
    </>


  );


}

export default App;











