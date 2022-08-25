import React, { useState, useEffect } from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
// import TestData from "../../dev/testData"
import * as Api from "../../api";
import Certificate from "./Certificate"
import CertificateAddForm from "./CertificateAddForm"

function Certificates({ portfolioOwnerId, isEditable }) {
    const [certificates, setCertificates] = useState([])
    const [isAdding, setIsAdding] = useState(false)

    useEffect(() => {
        Api.get("api/certification").then(res => setCertificates(res.data))

        // get test
        // const res = Db.get(1);
        // console.log(res.data)
        // setCertificates(res.data)
        // TestData.getCertificates(TestData.userId).then((res) =>
        //     setCertificates(res)
        // )
    }, [portfolioOwnerId])

    return (
        <Card>
            <Card.Body>
                <Card.Title>자격증</Card.Title>
                {certificates.map((certificate) => (
                    <Certificate
                        key={certificate.id}
                        certificate={certificate}
                        setCertificates={setCertificates}
                        isEditable={isEditable}
                    />
                ))}
                {isEditable && (
                    <Row className="mt-3 text-center mb-4">
                        <Col sm={{ span: 20 }}>
                            <Button onClick={() => setIsAdding(true)}>+</Button>
                        </Col>
                    </Row>
                )}
                {isAdding && (
                    <CertificateAddForm
                        portfolioOwnerId={portfolioOwnerId}
                        setCertificates={setCertificates}
                        setIsAdding={setIsAdding}
                    />
                )}
            </Card.Body>
        </Card>
    )
}

export default Certificates