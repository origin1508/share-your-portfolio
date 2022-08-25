import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import * as Api from "../../testApi";
import * as Api from "../../api";

// Education 삭제

function EducationDelete({ education, setEducations }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    await Api.delete("api/education", education._id);

    const res = await Api.get("api/education");
    const updatedEducation = res.data;
    setEducations(updatedEducation);
    setShow(false);
  };

  return (
    <>
      <Button variant="secondary" size="sm" onClick={handleShow}>
        삭제
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>학력 삭제</Modal.Title>
        </Modal.Header>
        <Modal.Body>정말 삭제하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EducationDelete;