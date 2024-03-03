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
    const [leftDie, setLeftDie] = useState<number>(d6);
    const [rightDie, setRightDie] = useState<number>(() => {
        let roll = d6();
        while (roll === leftDie) {
            roll = d6();
        }
        return roll;
    });
    const rollLeft = () => setLeftDie(d6());
    const rollRight = () => setRightDie(d6());

    const checkStatus = () => {
        if (leftDie === rightDie) {
            return leftDie === 1 ? "You Lose!" : "You Win!";
        }
        return "";
    };
    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <span data-testid="left-die">{leftDie}</span>{" "}
            <Button onClick={rollRight}>Roll Right</Button>
            <span data-testid="right-die">{rightDie}</span>
            <p>{checkStatus()}</p>
        </div>
    );
}
