import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import * as Api from "../../api";
import { useForm } from "../../hooks/useForm";

function ProjectAddForm({ onClick, getUser }) {
  const [values, isValid, handleChange] = useForm({
    title: "",
    detail: "",
    startDate: "",
    endDate: "",
  });

  const { title, detail, startDate, endDate, all } = isValid || {};

  const handlePutProject = async () => {
    if (all) {
      await Api.post("api/project", { ...values });
      getUser();
      onClick();
    }
  };

  return (
    <Form className="mt-3 mb-3 w-100">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="프로젝트 제목"
          name="title"
          onChange={handleChange}
        />
        {title || (
          <Form.Text className="text-danger">
            프로젝트 제목은 5글자 이상이여야 합니다.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="상세내역"
          name="detail"
          onChange={handleChange}
        />
        {detail && (
          <Form.Text className="text-danger">
            상세내역은 5글자 이상이여야 합니다.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3 w-50">
        <Row>
          <Col>
            <Form.Control
              type="date"
              name="startDate"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control type="date" name="endDate" onChange={handleChange} />
          </Col>
        </Row>
        {startDate || endDate || (
          <Form.Text className="text-danger">
            시작일과 종료일을 기입해주세요.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="d-flex justify-content-center">
        <Button
          variant="primary"
          className="me-3"
          onClick={handlePutProject}
          disabled={!isValid.all}
        >
          확인
        </Button>
        <Button variant="secondary" onClick={onClick}>
          취소
        </Button>
      </Form.Group>
    </Form>
  );
}

export default ProjectAddForm;
