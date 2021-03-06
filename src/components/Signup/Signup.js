import React, { useRef, useState } from "react";
import "./signupStyles.css";

import { Link, useHistory } from "react-router-dom";

import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      emailRef.current.value = "";
      passwordRef.current.value = "";
      passwordConfirmRef.current.value = "";
      return;
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      // history.push("/login");
    } catch (error) {
      setError("Failed to sign up");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control ref={passwordConfirmRef} type="password" required />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100 submit-btn"
              type="submit"
            >
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 have-acct">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default Signup;
