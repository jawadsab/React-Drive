import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  function handleLogout() {}
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser.email}
          <Link to="update-profile" className="w-100 btn btn-primary">
            Update P
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 have-acct">
        <Button variant="link" onClick={handleLogout}>
          log out
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
