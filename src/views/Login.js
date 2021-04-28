import { useEffect, useState, useContext } from "react";
import React from "react";
import { CORS_SERVER, API } from "../config";
import { Context } from "../context";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Card,
  InputGroup,
  Nav,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const context = useContext(Context);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const params = {
      email,
      password,
    };
    fetch(`${API}login`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLoading(false);
        switch (data.error) {
          case "INVALID_PASSWORD":
            return alert(`Error: Invalid password!`);
          case "NOT_FOUND":
            return alert(`Error: User does not exist!`);
        }

        context.loginUser(data);
        history.push("/dashboard");
      });
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "calc(100vh - 56px)",
        marginTop: "auto",
        marginBottom: "auto",
      }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card className="form-card shadow-xl" id="hospital">
          <Card.Body>
            <h3 className="text-center">Log In</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </InputGroup>
              </Form.Group>
              <p className="text-danger">{error && error}</p>
              <Button
                type="submit"
                className="w-100 text-center shadow-sm mt-1 mb-1"
              >
                {loading ? (
                  <div className="lit-spinner text-center mx-auto"></div>
                ) : (
                  "Log In"
                )}
              </Button>
            </Form>
            <p className="text-center mt-2 mb-0">
              Need an account?{" "}
              <Link to="/signup" className="text-danger font-bold">
                Sign Up
              </Link>
            </p>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
