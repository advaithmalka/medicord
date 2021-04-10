import { useEffect, useState } from 'react'
import React from "react";
import {
  Container,
  Form,
  Button,
  Card,
  InputGroup,
  Nav,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCheck, faUser, faAt } from "@fortawesome/free-solid-svg-icons";


export default function Signup() {
  const [error, setError] = useState()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  async function fetchData() {
       const res = await fetch('http://localhost:6942/signup', {
         method:'POST',
         data:{
           name:"hi g",
           username:"no g"
         }
       })
       const data = await res.json()
       console.log(data)
  }
    useEffect(() =>{
      fetchData()
    },[])
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "90vh", marginTop: "25px", marginBottom: "25px" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card className="form-card shadow-xl" id="hospital">
            <Card.Body>
              <h3 className="text-center">Patient Sign Up</h3>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <InputGroup className="mr-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      // value={fname}
                      placeholder="First Name"
                      // onChange={(e) => setFName(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faAt} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
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
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
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
                      // value={confirmPassword}
                      // onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <p className="text-danger">{error && error}</p>
                <Button
                  type="submit"
                  className="w-100 text-center shadow-sm"
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        
      </div>
      </Container>
    )
}
