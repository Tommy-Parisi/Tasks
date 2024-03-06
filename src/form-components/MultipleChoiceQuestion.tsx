import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    //Model
    const [choice, setChoice] = useState(options[0]);

    //Control
    const isCorrect = choice === expectedAnswer;

    function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    //View
    return (
        <div>
            <select
                value={choice}
                onChange={handleSelect}
                aria-label="Multiple choice options"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
