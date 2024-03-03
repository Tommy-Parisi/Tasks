import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(1);
    const [rightDie, setRightDie] = useState(2);

    const rollLeft = () => {
        const newRoll = d6();
        setLeftDie(newRoll);
    };

    const rollRight = () => {
        const newRoll = d6();
        setRightDie(newRoll);
    };

    const gameStatus = () => {
        if (leftDie === 1 && rightDie === 1) {
            return "You Lose! (Snake Eyes)";
        } else if (leftDie === rightDie) {
            return "You Win!";
        }
        return "";
    };

    return (
        <div>
            <button onClick={rollLeft}>Roll Left</button>
            <span data-testid="left-die">{leftDie}</span>
            <button onClick={rollRight}>Roll Right</button>
            <span data-testid="right-die">{rightDie}</span>
            <p>{gameStatus()}</p>
        </div>
    );
}
