import React, { useState } from "react";
import { Form, InputGroup, Tabs, Tab, Row, Col } from "react-bootstrap";

const CallForwardContainer = () => {
    const [number, setNumber] = useState("(619) 866-4077")

    const formatPhoneNumber = (value) => {
        const input = value.replace(/\D/g, "");
        let formattedNumber = "";
    
        if (input.length > 0) {
          formattedNumber += `(${input.substring(0, 3)}`;
        }
        if (input.length > 3) {
          formattedNumber += `) ${input.substring(3, 6)}`;
        }
        if (input.length > 6) {
          formattedNumber += `-${input.substring(6, 10)}`;
        }
    
        return formattedNumber;
    };


    const handleChange = (e) => {
        setNumber(formatPhoneNumber(e.target.value));
    }
    return (
        <>
            <div className="p-4">
                <h2 className="mb-4">Call Forwarding</h2>
                <Tabs
                    activeKey="general"
                    defaultActiveKey="profile"
                    id="sms-tabs"
                    className="mb-3"
                >
                    <Tab className="p-4" eventKey="general" title="General">
                    <Row className="align-items-center" style={{ borderBottom: '1px solid #ddd' }}>
                            <Col xs={12} md={3}>
                                <InputGroup className="mb-3">
                                    <Form.Check
                                        type="switch"
                                        id="automatic-reply"
                                        label="(877) 595 8635 to"
                                        reverse
                                    />
                                </InputGroup>
                                <p>Forward all calls to the specific destination.</p>
                            </Col>
                            <Col xs={12} md={3}>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="(XXX) XXX-XXXX"
                                        aria-label="phone-number"
                                        aria-describedby="basic-addon1"
                                        value={number}
                                        onChange={handleChange}
                                        maxLength={14} 
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default CallForwardContainer;