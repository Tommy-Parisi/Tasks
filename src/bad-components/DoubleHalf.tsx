import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    const Doubler = () => {
        return setDhValue(2 * dhValue);
    };

    const Halver = () => {
        return setDhValue(0.5 * dhValue);
    };

    return (
        <div>
            Double Half
            <button onClick={Doubler}>Double</button>
            <button onClick={Halver}>Halve</button>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
        </div>
    );
}
