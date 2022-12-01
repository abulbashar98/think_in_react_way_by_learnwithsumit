
import React from "react";


export default class MyComponentClass extends React.Component {

    state = {
        count: 0,
        date: new Date(),
    }

    componentDidMount() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
        setInterval(this.tick, 1000)
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    addClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }))
    }

    render() {
        const { date } = this.state;
        return (
            <div>
                <p>Time:{date.toLocaleTimeString()}</p>
                <p>
                    <button type="button" onClick={this.addClick}>add click</button>
                </p>
            </div>
        );

    }



}