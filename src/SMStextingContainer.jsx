import React, { useState } from "react";
import { Form, InputGroup, Card, Tabs, Tab, Row, Col } from "react-bootstrap";

const EditableText = ({ initialText }) => {
    const [text, setText] = useState(initialText);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    return (
        <Card.Text onClick={() => setIsEditing(true)} style={{ cursor: "pointer", minHeight: "40px" }}>
            {isEditing ? (
                <textarea
                    autoFocus
                    value={text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    onKeyDown={(e) => e.key === "Enter" && handleBlur()}
                    style={{ width: "100%", minHeight: "60px", border: "1px solid #ccc", borderRadius: "5px" }}
                />
            ) : (
                text || "Click to edit..."
            )}
        </Card.Text>
    );
};

const SMSTextingContainer = () => {
    return (
        <div className="p-4">
            <h2 className="mb-4">SMS Texting</h2>
            <Tabs activeKey="general" defaultActiveKey="profile" id="sms-tabs" className="mb-3">
                <Tab className="p-4" eventKey="general" title="General">
                    <Row>
                        <Col xl={3} lg={12} md={12} sm={12} xs={12}>
                            <InputGroup className="mb-3">
                                <Form.Check type="switch" id="automatic-reply" label="Automatic Reply" reverse />
                            </InputGroup>
                        </Col>
                        <Col xl={3} lg={12} md={12} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <EditableText initialText="Hello, we missed your call and would love to assist you. Please let us know a convenient time to connect. Looking forward to speaking with you!" />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} lg={12} md={12} sm={12} xs={12}></Col>
                        <Col xl={3} lg={12} md={12} sm={12} xs={12}></Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
    );
};

export default SMSTextingContainer;
