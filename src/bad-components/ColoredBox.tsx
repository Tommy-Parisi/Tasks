import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const changeColor = () => {
        const newIndex = (colorIndex + 1) % COLORS.length;
        setColorIndex(newIndex);
        console.log("Changing color to index:", newIndex); // Diagnostic log
    };

    function ColorPreview() {
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: COLORS[colorIndex],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        );
    }

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <Button onClick={() => changeColor()}>Next Color</Button>
                <ColorPreview />
            </div>
        </div>
    );
}
