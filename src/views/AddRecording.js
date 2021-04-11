import { useState, useEffect, useContext } from "react";
import { Container, Button, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUser,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { API } from "../config";
import axios from "axios";
import getUser from "../getUser";
import { firerage } from "../firebase";
import { useHistory, Link } from "react-router-dom";

function AddRecording() {
  const [file, setFile] = useState("");
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(40);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const storageRef = firerage
        .ref(getUser().email)
        .child(file.name)
        .put(file);
      storageRef.on("on", async () => {
        setLoading(true);
        const url = await storageRef.snapshot.ref.getDownloadURL();

        await axios
          .get(
            `${API}upload?url=${url}&id=${
              getUser().id
            }&title=${title}&percent=${Math.ceil(percent)}`
          )
          .then((data) => {
            console.log(data);
            setLoading(false);
            history.push("/dashboard");
          })
          .catch(console.error);
      });
    }
  };
  return (
    <Container className="pt-20">
      <Link
        to="/dashboard"
        className="text-black hover:no-underline hover:text-black"
      >
        <Icon icon={faChevronLeft} /> Go Back
      </Link>
      <h1 className="mb-3 mt-2">Create Session</h1>
      <br />
      <Form onSubmit={handleSubmit} className="mb-10">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Enter a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="d-flex">
          <Form.Label>% of Transcript in Summary: </Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              placeholder={"ex. 50"}
              value={percent}
              onChange={(e) => setPercent(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Label>File</Form.Label>
        <div className="custom-file">
          <input
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            type="file"
            className="custom-file-input"
            id="customFile"
            accept="audio/*"
            required
          />
          <label className="custom-file-label" htmlFor="customFile">
            {file ? file.name : "Choose file"}
          </label>
          <button type="submit" className="btn btn-danger mt-3">
            {loading ? (
              <div className="lit-spinner text-center mx-auto"></div>
            ) : (
              "Upload audio"
            )}
          </button>
        </div>
      </Form>
      {/* <audio id="audio" controls src={file.file && file.file} /> */}
    </Container>
  );
}

export default AddRecording;
