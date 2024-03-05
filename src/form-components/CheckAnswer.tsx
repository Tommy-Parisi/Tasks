import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //State (Model)
    const [userAnswer, setUserAnswer] = useState("");
    //Control
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }
    const resultIcon = userAnswer === expectedAnswer ? "✔️" : "❌";
    //View
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formUserAnswer">
                <Form.Label>Answer:</Form.Label>
                <InputGroup>
                    <Form.Control
                        type="text"
                        value={userAnswer}
                        onChange={handleChange}
                        placeholder="Enter your answer"
                    />
                    <InputGroup.Text>{resultIcon}</InputGroup.Text>
                </InputGroup>
            </Form.Group>
        </div>
    );
}
