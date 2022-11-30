import React from "react";


export default class Todo extends React.Component {

    state = {
        todo: '',
        warning: null
    }

    style = { width: '50%', marginLeft: '500px' }

    handleChange = (e) => {

        const inputValue = e.target.value;

        const warning = inputValue.includes(".js") ? "You need Advanced JavaScript skill to Handle this, Do you have it??" : null

        this.setState({
            todo: inputValue,
            warning: warning
        })



    }



    render() {

        const { todo, warning } = this.state;


        return (
            <div style={this.style}>
                <h2>{todo}</h2>
                <textarea onChange={this.handleChange} name="input" id="" ></textarea>
                <h1>{warning || "Good Choice!"}</h1>

            </div>

        );

    }


}