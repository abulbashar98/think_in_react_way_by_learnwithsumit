import React from "react";
import Todo from "./Components/Todo";
import TodoFunctional from "./Components/TodoFunctional";









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
        <Todo />
        <TodoFunctional />
      </>

    )
  }
}
