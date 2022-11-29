import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import User from "./components/User";








export default class App extends React.Component {

  state = {
    theme: 'dark'
  }

  render() {
    const { theme } = this.state;
    return (
      <>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter
              count={count}
              incrementCount={incrementCount}
            />)}
        </Counter>
        <Provider value={ }><Section theme={theme}></Section></Provider>



        <User name={(isLoggedIn) => isLoggedIn ? "Bashar" : "Guest"}></User>
      </>
    );
  }
}
