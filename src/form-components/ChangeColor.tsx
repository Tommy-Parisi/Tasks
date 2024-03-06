import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState("Red");

    const COLORS = [
        { label: "Red", value: "#FFA500" },
        { label: "Green", value: "#008000" },
        { label: "Blue", value: "#0000FF" },
        { label: "Yellow", value: "#FFFF00" },
        { label: "Purple", value: "#800080" },
        { label: "Orange", value: "#FF4500" },
        { label: "Pink", value: "#FFC0CB" },
        { label: "Gray", value: "#808080" }
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((curr) => (
                <Form.Check
                    key={curr.label}
                    type="radio"
                    id={curr.label}
                    name="Color Options"
                    label={curr.label}
                    value={curr.value}
                    checked={color === curr.value}
                    onChange={updateColor}
                />
            ))}
            <div
                data-testid={"colored-box"}
                style={{
                    backgroundColor: color,
                    color: color,
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                Selected Color
            </div>
        </div>
    );
}
