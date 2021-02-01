import React, { useRef, useState } from "react";

import { Link, Redirect } from "react-router-dom";

import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;

    try {
      setError("");
      setLoading(true);
      // await login(email, password);
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

            <Button
              disabled={loading}
              className="w-100 submit-btn"
              type="submit"
            >
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-2 have-acct">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 have-acct">
        Need an Account? <Link to="/signup">Sign up</Link>
      </div>
      {sucess && <Redirect to="/" />}
    </>
  );
};

export default ForgotPassword;
