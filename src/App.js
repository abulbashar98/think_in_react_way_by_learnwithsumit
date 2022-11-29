import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import User from "./components/User";
import ThemeContext from "./Contexts/themeContext";








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
        <ThemeContext.Provider value={{ theme: theme }}><Section ></Section></ThemeContext.Provider>



        <User name={(isLoggedIn) => isLoggedIn ? "Bashar" : "Guest"}></User>
      </>
    );
  }
}
