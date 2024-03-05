import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    //Model
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setStudent] = useState(true);
    //Control
    function updateEditMode() {
        setEditMode(!editMode);
    }
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setUserName(event.target.value);

    function updateIsStudent() {
        setStudent(!isStudent);
    }
    //View
    return (
        <div>
            <Form>
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={updateEditMode}
                />
            </Form>

            {editMode ? ( //Conditional Rendering, like tenary if but for rendering
                <Form>
                    <Form.Group controlId="studentCheckBox">
                        <Form.Check
                            type="checkbox"
                            label="Student"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    </Form.Group>

                    <Form.Group controlId="userName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                </Form>
            ) : (
                //If edit mode evaluates to false
                <p>
                    {userName} is {isStudent ? "" : "not "}a student.
                </p>
            )}
        </div>
    );
}
