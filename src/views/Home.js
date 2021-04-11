import React from "react";
import { useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  ButtonGroup,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="landing-page">
        {" "}
        <Container className="text-left text-xl landing-container">
          <div className="landing-text">
            <h1 className="text-7xl mb-3">
              <span className="logo-theme">
                <span>M</span>edi
                <span>C</span>ord
              </span>
            </h1>
            <p className="mb-4">
              Letting you get the most out of your conversations with medical
              professionals.
            </p>
            <Link to="/signup" className="btn btn-primary px-3">
              Sign Up
            </Link>
          </div>
          <div className="landing-img"></div>
        </Container>
      </div>
      <Container className="text-center">
        <div className="footer-logo pb-4 mt-7">
          <strong className="text-lg">
            <span>M</span>edi<span>C</span>ord
          </strong>
          <br />
          <em className="text-sm">
            by{" "}
            <a href="https://advaithmalka.github.io/" target="_blank">
              Advaith Malka
            </a>
            ,{" "}
            <a href="https://realtechnerd.github.io/" target="_blank">
              Nithil Krishnaraj
            </a>
            , and{" "}
            <a href="https://sritanmotati.github.io/" target="_blank">
              Sritan Motati
            </a>
          </em>
        </div>
      </Container>
    </>
  );
}

export default Home;
