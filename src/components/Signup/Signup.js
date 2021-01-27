import React, { useRef } from "react";
import "./signupStyles.css";
import { Card, Form, Button } from "react-bootstrap";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          <Form>
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
          </Form>
          <Button className="w-100 submit-btn" type="submit">
            Sign up
          </Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 have-acct">
        Already have an account? Log in
      </div>
    </>
  );
};

export default Signup;
