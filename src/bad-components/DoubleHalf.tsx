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
            <Button onClick={Doubler}>Double</Button>
            <Button onClick={Halver}>Halve</Button>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
        </div>
    );
}
