import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler() {
    return setDhValue(2 * dhValue);
}

function Halver() {
    return setDhValue(0.5 * dhValue);
}

export function DoubleHalf(): JSX.Element {
    return (
        <div>
            <h3>Double Half</h3>
            <button onClick={Doubler}>Double</button>
            <button onClick={Halver}>Halve</button>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
        </div>
    );
}
