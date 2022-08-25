import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
// import { putProject } from './dev/mockApiProject';
//import TestData from "../../dev/testData"
import * as Api from '../../api';
import useValidation from '../../hooks/useValidation';

function ProjectAddForm({ onClick, getUser }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [
        checkValidationTitle,
        checkValidationDescription,
        checkValidationDate,
        checkValidationAll,
    ] = useValidation();

    const isValidTitle = checkValidationTitle(title);
    const isValidDescription = checkValidationDescription(description);
    const isValidDate =
        checkValidationDate(startDate) && checkValidationDate(endDate);
    const isValid = checkValidationAll(
        isValidTitle,
        isValidDescription,
        isValidDate
    );

    const handlePutProject = async () => {
        // await putProject({ name, description, date, key });
        // await TestData.createProject({ name, description, date, key })
        if (isValid) {
            await Api.post('api/project', {
                title,
                detail: description,
                startDate,
                endDate,
            });
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="상세내역"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3 w-50">
                <Row>
                    <Col>
                        <Form.Control
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
                <Button
                    variant="primary"
                    className="me-3"
                    onClick={handlePutProject}
                    disabled={isValid}
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
