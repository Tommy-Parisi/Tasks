import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import mePic from "./assets/IMG_5882.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Thomas Parisi: UD CISC275 with React Hooks and TypeScript
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </header>
            <h3>Thomas Parisi</h3>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <ul>
                            <li>University Of Delaware</li>
                            <li>BS Computer Science</li>
                            <li>Cybersecurity Concentration</li>
                        </ul>
                    </Col>
                    <Col>
                        <img
                            src={mePic}
                            alt="A picture of me"
                            style={{ width: "200px", height: "auto" }}
                        />
                        <div
                            style={{
                                width: "500px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
        </div>
    );
}

export default App;
