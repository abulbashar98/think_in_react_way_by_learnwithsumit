import React from "react";


const scaleName = {
    c: 'celcius',
    f: 'farenheit'
};


export default class TemperatureInput extends React.Component {


    render() {
        const { scale, temperature, onTemperatureChange } = this.props;
        return (
            <fieldset>
                <legend>Enter Temperature here in {scaleName[scale]}</legend>
                <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e, scale)} />
            </fieldset>
        );
    }
}