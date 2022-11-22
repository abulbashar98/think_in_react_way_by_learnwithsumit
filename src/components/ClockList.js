import Clock from "./Clock";




function ClockList({ quantities = [] }) {
    return (
        <><div>
            {quantities.map((key) => (
                // <Clock key={Math.random()} />
                <Clock key={key} />
            ))}
        </div>
            <div>
                {quantities.map((key) => (
                    // <Clock key={Math.random()} />
                    <Clock key={key} />
                ))}
            </div></>
    );
}

export default ClockList;