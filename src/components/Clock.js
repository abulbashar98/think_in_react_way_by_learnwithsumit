import React from 'react'


class Clock extends React.Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date(),
    //         locale: 'bn-BD'
    //     };
    //     this.handleClick = this.handleClick.bind(this)
    // }

    state = {
        date: new Date(),
        locale: "bn-BD"
    }



    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick()
        }, 1000)
    }


    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    // tick() {
    //     this.setState((state, props) => {
    //         value: state.something + state.increment
    //     })
    // }

    tick() {
        this.setState(
            {
                date: new Date()
            }
        )
    }

    //==>> Does not work with a normal function syntax, 
    //     because of execution context of this. in a callback function 

    // handleClick(locale) {
    //     // console.log("Button was clicked")
    //     this.setState({
    //         locale,
    //     })

    // }


    // ====> Solve 1, (best practice)
    //      use arrow function 

    handleClick = () => {
        // console.log("Button was clicked")
        this.setState({
            locale: "en-Us"
        })

    }




    //====>  Solve 2
    //       Bind Call back function in Constructor with this object


    //======> Solve 3 
    //        Bind when we pass the reference of function, This way 
    //        we can also pass parameter in second index


    //======> Solve 4
    //       or else using arrow function as wrapper function   
    //       (best practice)






    render() {

        const { date, locale } = this.state

        return (
            <div>
                <h1 className='heading'>
                    <span className='text'>{date.toLocaleTimeString(locale)}</span>
                </h1>
                {/* <button onClick={this.handleClick.bind(this, "en-US")}>Click Here</button> */}
                <button onClick={() => this.handleClick("en-US")}>Click Here</button>
            </div>
        );
    }

}

export default Clock;