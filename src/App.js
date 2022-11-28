import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";








function App() {

  return (
    <>
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
          />)}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
          />)}
      </Counter>



      <User name={(isLoggedIn) => isLoggedIn ? "Bashar" : "Guest"}></User>
    </>
  );


}

export default App;
