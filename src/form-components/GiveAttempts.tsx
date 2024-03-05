import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    //State (Model)
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [reqAttempts, setReqAttempts] = useState<number | "">(0);
    //Control
    function decAttempts() {
        setAttemptsLeft(attemptsLeft - 1);
    }
    function incAttempts() {
        if (reqAttempts !== "") {
            setAttemptsLeft(attemptsLeft + reqAttempts);
        }
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setReqAttempts(value === "" ? "" : Number(value)); // Update reqAttempts, allowing for empty string or number (GPT GUIDED LINE)
    }
    //View
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="AttemptsLeftForm">
                <h6>Attempts left: {attemptsLeft}</h6>
                <Form.Label>How many attempts do you want?</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button onClick={decAttempts} disabled={attemptsLeft <= 0}>
                Use
            </Button>
            <Button onClick={incAttempts}>Gain</Button>
        </div>
    );
}
