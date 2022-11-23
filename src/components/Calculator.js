import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";


export default class Calculator extends React.Component {




    render() {




        return (
            <div>

                <TemperatureInput scale='c' />
                <TemperatureInput scale='f' />


                {/* <BoilingVerdict
                    temperature={temperature}
                /> */}
            </div>
        );
    }


}