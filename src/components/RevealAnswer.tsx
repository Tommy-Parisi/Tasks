import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setVisibility] = useState<boolean>(false);

    const toggleVisibility = () => {
        return setVisibility(!isVisible);
    };

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {isVisible && <p>42</p>}.
        </div>
    );
}
