import React, { useRef, useState } from "react";

import { Link, useHistory, Redirect } from "react-router-dom";

import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const history = useHistory();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log({ email, password });

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      setSucess(true);
      // history.push("/");
    } catch (error) {
      setError("Incorrect email or password");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="john@gmail.com"
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" required />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100 submit-btn"
              type="submit"
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 have-acct">
        Need an Account? <Link to="/signup">Sign up</Link>
      </div>
      {sucess && <Redirect to="/" />}
    </>
  );
};

export default Login;
