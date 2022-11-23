import React from "react";


const scaleName = {
    c: 'celcius',
    f: 'farenherit'
};


export default class TemperatureInput extends React.Component {

    state = {
        temperature: '',
        scale: ''
    }


    handleChange = (e) => {

        this.setState(
            {
                temperature: e.target.value
            }
        )

    }

    render() {
        const { temperature } = this.state;
        const { scale } = this.props;
        return (
            <fieldset>
                <legend>Enter Temperature here in {scaleName[scale]}</legend>
                <input type="text" value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}