import { useState } from "react";
import { Card, Container, Nav, Modal } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ReadMoreReact from "read-more-react";
import Tippy from "@tippyjs/react";

function Session({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card key={data.idx} className="shadow-md border-none mb-4">
        <Card.Body>
          {/* nithil was here */}
          <div className="block overflow-hidden text-center">
            <Card.Text className="md:float-left">
              <small className="text-muted">
                {moment(data.date).format("MM/DD/YY")}
              </small>
            </Card.Text>
            <Tippy delay={[200, 0]} content="View transcript">
              <button
                className="btn btn-light md:float-right rounded-full mr-1"
                onClick={handleShow}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
            </Tippy>
          </div>
          <h4>{data.title}</h4>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Transcript:</strong>
          <ReadMoreReact
            text={data.transcription}
            readMoreText="...Read More"
          />
          <br />
          <strong>Summary:</strong>
          <ReadMoreReact text={data.summary} readMoreText="...Read More" />
        </Modal.Body>
        <Modal.Footer>
          <Card.Text className="float-right align-right">
            <small className="text-muted">
              {moment(data.date).format("MM/DD/YY")}
            </small>
          </Card.Text>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Session;
