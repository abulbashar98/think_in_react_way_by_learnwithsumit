import React from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";


export default class Calculator extends React.Component {

    state = {
        temperature: '',
        scale: ''
    }


    handleChange = (e, scale) => {

        this.setState(
            {
                temperature: e.target.value,
                scale,
            }
        )
    }



    render() {

        const { temperature, scale } = this.state;

        const celsius = scale === "f" ? convert(temperature, toCelsius) : temperature;

        const fahrenheit = scale === "c" ? convert(temperature, toFahrenheit) : temperature

        return (
            <div>

                <TemperatureInput
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                    scale='c' />
                <TemperatureInput
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange}
                    scale='f'
                />


                <BoilingVerdict
                    celsius={parseFloat(temperature)}
                />
            </div>
        );
    }


}