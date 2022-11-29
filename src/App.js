import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import User from "./components/User";
import ThemeContext from "./Contexts/themeContext";








export default class App extends React.Component {

  state = {
    theme: 'dark',
    switchTheme: () => {

      this.setState(({ theme }) => {
        if (theme === 'dark') {
          return {
            theme: 'light'
          }
        }
        else {
          return {
            theme: 'dark'
          }
        }
      }
      )
    }
  }




  render() {

    return (
      <>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter
              count={count}
              incrementCount={incrementCount}
            />)}
        </Counter>
        <ThemeContext.Provider value={this.state}><Section ></Section></ThemeContext.Provider>

      </>
    );
  }
}
