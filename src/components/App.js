import React from "react";

import { Container } from "react-bootstrap";

import Signup from "./Signup/Signup";

export default function App() {
  return (
    <Container
      className="App d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />
      </div>
    </Container>
  );
}
