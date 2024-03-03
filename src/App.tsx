import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import mePic from "./assets/IMG_5882.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Thomas Parisi: UD CISC275 with React Hooks and TypeScript
                </h1>
                <button
                    className="btn btn-primary"
                    onClick={() => console.log("Hello World!")}
                >
                    Log Hello World
                </button>
            </header>
            <ul>
                <li>University Of Delaware</li>
                <li>BS Computer Science</li>
                <li>Cybersecurity Concentration</li>
            </ul>
            <img
                src={mePic}
                alt="A picture of me"
                style={{ width: "200px", height: "auto" }}
            />
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
