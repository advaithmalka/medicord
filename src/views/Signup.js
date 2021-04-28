import { useEffect, useState, useContext } from "react";
import React from "react";
import { CORS_SERVER, API } from "../config";
import {
  Container,
  Form,
  Button,
  Card,
  InputGroup,
  Nav,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context";
import { useHistory, Link } from "react-router-dom";
export default function Signup() {
  const [error, setError] = useState("");
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const context = useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      return alert(
        "Please make sure the password and re-enter password fields match."
      );
    }
    const params = {
      email: data.email,
      password: data.password,
    };
    fetch(`${API}signup`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        context.loginUser(data);
        history.push("/dashboard");
      })
      .catch(err => console.log(err));
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
            <h3 className="text-center">Sign Up</h3>
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
                    value={data.email}
                    onChange={e =>
                      setData({
                        ...data,
                        email: e.target.value,
                      })
                    }
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
                    value={data.password}
                    onChange={e =>
                      setData({
                        ...data,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faCheck} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter password"
                    value={data.confirmPassword}
                    onChange={e =>
                      setData({
                        ...data,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                </InputGroup>
              </Form.Group>
              <p className="text-danger">{error && error}</p>
              <Button
                onClick={handleSubmit}
                type="submit"
                className="w-100 text-center shadow-sm"
              >
                Sign Up
              </Button>
            </Form>
            <p className="text-center mt-3 mb-0">
              Already have an account?{" "}
              <Link to="/login" className="text-danger">
                <b>Log In</b>
              </Link>
            </p>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
