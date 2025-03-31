import React, { useState } from "react";
import { Form, InputGroup, Tabs, Tab, Row, Col, Card, Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { CgMicrosoft } from "react-icons/cg";

const logs = [
    { time: '2025-02-12 23:45', user: 'admin', action: 'created extension 1001' },
    { time: '2025-02-12 23:47', user: 'user123', action: 'changed outbound caller ID for extension 1002' },
    { time: '2025-02-12 23:49', user: 'admin', action: 'disabled call forwarding for extension 1003' },
    { time: '2025-02-12 23:51', user: 'user456', action: 'enabled voicemail for extension 1004' },
    { time: '2025-02-12 23:53', user: 'admin', action: 'disabled voicemail for extension 1005' },
    { time: '2025-02-12 23:55', user: 'admin', action: 'reset voicemail PIN for extension 1006' },
    { time: '2025-02-12 23:57', user: 'user789', action: 'updated ring group settings for extension 1007' },
    { time: '2025-02-12 23:59', user: 'admin', action: 'deleted extension 1008' },
    { time: '2025-02-13 00:01', user: 'user999', action: 'changed call recording settings for extension 1009' },
    { time: '2025-02-13 00:03', user: 'admin', action: 'blocked international calls for extension 1010' },
];

const ProfileContainer = () => {
    const logText = logs
        .map(log => `${log.time} - ${log.user}: ${log.action}`)
        .join('\n');

    return (
        <div className="p-4">
            <h2 className="mb-4">Lulunails</h2>
            <Tabs
                activeKey="general"
                defaultActiveKey="profile"
                id="sms-tabs"
                className="mb-4"
            >
                <Tab eventKey="general" title="General">
                    <Row className="mb-3">
                        <Col lg={3}>
                            <Form.Group className="d-flex align-items-center">
                                <Form.Label column className="p-2" style={{ whiteSpace: 'nowrap' }}>
                                    Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Form.Label>

                                <Form.Control
                                    type="text"
                                    id="nameInput"
                                    placeholder="Albert Pangan"
                                    className="form-control"
                                />
                            </Form.Group>

                        </Col>
                    </Row>
                    <hr style={{ width: '80%', color: "#ddd" }} />
                    <Row className="mb-3">
                        <Col lg={3}>
                            <Form.Group className="d-flex align-items-center">
                                <Form.Label column className="p-2" style={{ textWrap: 'nowrap' }}>
                                    Email Address
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    id="nameInput"
                                    placeholder="albert@tranparentvoip.com"
                                    className="form-control"
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={12} className="d-flex align-items-center justify-content-start" style={{ paddingTop: '10px' }}>

                            <div className="d-flex gap-3">
                                <a href="#manageLinkedAccounts" className="text-decoration-none text-primary">
                                    <p>Manage linked accounts</p>
                                </a>
                                <SiApple size={24} className="text-muted" />
                                <FcGoogle size={24} className="text-muted" />
                                <CgMicrosoft size={24} className="text-muted" />
                            </div>
                        </Col>
                    </Row>

                    <hr style={{ width: '80%', color: "#ddd" }} />
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="logs" className="text-muted">
                            Logs
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            id="logs"
                            placeholder="All Logs here"
                            value={logText}
                            rows={15}
                            readOnly
                            onFocus={(e) => e.target.blur()}
                            className="form-control log-textarea"
                            style={{ width: '100%', maxWidth: '800px', marginLeft: '50px', marginRight: '50px', marginTop:'-30px', padding: 'auto', maxHeight: '400px', minHeight:'400px'}}
                        />

                    </Form.Group>
                </Tab>
            </Tabs>
        </div>
    );
}

export default ProfileContainer;
