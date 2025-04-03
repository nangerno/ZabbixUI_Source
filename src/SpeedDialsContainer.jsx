import React, { useState } from "react";
import { Table, Form, Button, Tabs, Tab, Row, Col, Stack, Figure, Pagination, Alert, Placeholder } from "react-bootstrap";
import { FaPhoneSquareAlt } from "react-icons/fa";


const SpeedDialsContainer = () => {


    const [selectedType, setSelectedType] = useState("None");
    const [selectedValue, setSelectedValue] = useState("");

    const optionsByType = {
        BLF: ["Crystal", "Catherine", "Richard"],
        Transfer: ["Stephen", "Eric", "James"],
        Line: ["Andrew", "John", "Mike"],
        SpeedDial: ["Crystal", "Catherine", "Richard"],
        CallPark: ["Stephen", "Eric", "James"],
        Conference: ["Andrew", "John", "Mike"],
        CallPickup: ["Crystal", "Catherine", "Richard"],
        Voicemail: ["Stephen", "Eric", "James"],
        None: [],
    };


    let active = 1;
    let items = [];
    for (let number = 1; number <= 3; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} style={{ padding: "0.5em" }}>
                {number}
            </Pagination.Item>,
        );
    }
    const [crystalType, setCrystalType] = useState(1);
    const handleChange = (e) => {
        setCrystalType(e.target.value);
    }

    return (
        <>
            <div className="p-4">
                <h2 className="mb-4">Speed Dials</h2>
                <Tabs
                    activeKey="general"
                    defaultActiveKey="profile"
                    id="sms-tabs"
                    className="mb-3"
                >
                    <Tab className="p-4" eventKey="general" title="General">
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                <h4>Extension</h4>
                                <p>Select an extension to update its home screen.</p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={2}>
                                <Form.Select aria-label="Extension Selection" className="mt-2">
                                    <option value="1">Crystal 10001</option>
                                    <option value="2">Crystal 10002</option>
                                    <option value="3">Crystal 10003</option>
                                    <option value="4">Crystal 10004</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <div className="scale-down">
                            <Row>
                                <Col lg={2}></Col>
                                <Col xs={12} lg={8} className="overflow-container">
                                    <Row>
                                        <Col xs={2}>
                                            <div style={{ height: '60px' }}></div>
                                            {Array(5).fill(null).map((_, index) => (
                                                <Form.Select
                                                    key={index}
                                                    className="mt-2"
                                                    aria-label="Type Selection"
                                                    style={{
                                                        color: "white",
                                                        backgroundColor: "#3e505e",
                                                    }}
                                                    value={selectedType}
                                                    onChange={(e) => setSelectedType(e.target.value)}
                                                >
                                                    <option value="None">None</option>
                                                    <option value="BLF">BLF</option>
                                                    <option value="Transfer">Transfer</option>
                                                    <option value="Line">Line</option>
                                                    <option value="SpeedDial">Speed Dial</option>
                                                    <option value="CallPark">Call Park</option>
                                                    <option value="Conference">Conference</option>
                                                    <option value="CallPickup">Call Pickup</option>
                                                    <option value="Voicemail">Voicemail</option>
                                                </Form.Select>
                                            ))}
                                        </Col>
                                        <Col xs={8} style={{ backgroundColor: '#ddd', flexGrow: 1 }}>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    color: 'white',
                                                    fontSize: '1.5em',
                                                    backgroundColor: "#3e505e",
                                                    height: '40px',
                                                    borderRadius: '10px',
                                                    marginTop: '20px',
                                                    padding: '0 15px',
                                                }}
                                            >
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <FaPhoneSquareAlt size={30} />
                                                    Crystal
                                                </div>
                                                <div>12:55 PM FRI, Jan 31</div>
                                            </div>
                                            <Row>
                                                <Col xs={3}>
                                                    {Array(5).fill(null).map((_, index) => (
                                                        <Form.Select
                                                            key={index}
                                                            className="mt-2"
                                                            aria-label="Value Selection"
                                                            style={{
                                                                color: "white",
                                                                backgroundColor: "#3e505e",
                                                            }}
                                                            value={selectedValue}
                                                            onChange={(e) => setSelectedValue(e.target.value)}
                                                            disabled={!selectedType}
                                                        >
                                                            <option value="">Select Value</option>
                                                            {optionsByType[selectedType]?.map((value, idx) => (
                                                                <option key={idx} value={value}>
                                                                    {value}
                                                                </option>
                                                            ))}
                                                        </Form.Select>
                                                    ))}
                                                </Col>
                                                <Col xs={6} className="d-flex justify-content-center">
                                                    <Figure className="text-center my-5">
                                                        <Figure.Image
                                                            style={{ maxWidth: "40%", height: "auto", borderRadius: "8px" }}
                                                            alt="Speed Dials"
                                                            src="speedialsImg.png"
                                                        />
                                                    </Figure>
                                                </Col>
                                                <Col xs={3}>
                                                    {Array(5).fill(null).map((_, index) => (
                                                        <Form.Select
                                                            key={index}
                                                            className="mt-2"
                                                            aria-label="Value Selection"
                                                            style={{
                                                                color: "white",
                                                                backgroundColor: "#3e505e",
                                                            }}
                                                            value={selectedValue}
                                                            onChange={(e) => setSelectedValue(e.target.value)}
                                                            disabled={!selectedType}
                                                        >
                                                            <option value="">Select Value</option>
                                                            {optionsByType[selectedType]?.map((value, idx) => (
                                                                <option key={idx} value={value}>
                                                                    {value}
                                                                </option>
                                                            ))}
                                                        </Form.Select>
                                                    ))}
                                                    <Pagination
                                                        size="sm"
                                                        className="mt-2 d-flex flex-wrap justify-content-center"
                                                        style={{ maxWidth: "100%", overflowX: "auto" }}
                                                    >
                                                        {items}
                                                    </Pagination>
                                                </Col>
                                            </Row>
                                            <Row>
                                                {Array(4).fill("").map((_, index) => (
                                                    <Col
                                                        key={index}
                                                        className="m-2 text-white d-flex align-items-center justify-content-center"
                                                        style={{ backgroundColor: "#3e505e", height: "40px", borderRadius: "10px" }}
                                                    >

                                                    </Col>
                                                ))}
                                            </Row>
                                            <div className="d-flex justify-content-end">
                                                <Button variant="primary" className="m-2">Save</Button>
                                            </div>
                                        </Col>
                                        <Col xs={2}>
                                            <div style={{ height: '60px' }}></div>
                                            {Array(5).fill(null).map((_, index) => (
                                                <Form.Select
                                                    key={index}
                                                    className="mt-2"
                                                    aria-label="Type Selection"
                                                    style={{
                                                        color: "white",
                                                        backgroundColor: "#3e505e",
                                                    }}
                                                    value={selectedType}
                                                    onChange={(e) => setSelectedType(e.target.value)}
                                                >
                                                    <option value="None">None</option>
                                                    <option value="BLF">BLF</option>
                                                    <option value="Transfer">Transfer</option>
                                                    <option value="Line">Line</option>
                                                    <option value="SpeedDial">Speed Dial</option>
                                                    <option value="CallPark">Call Park</option>
                                                    <option value="Conference">Conference</option>
                                                    <option value="CallPickup">Call Pickup</option>
                                                    <option value="Voicemail">Voicemail</option>
                                                </Form.Select>
                                            ))}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={2}></Col>
                            </Row>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}


export default SpeedDialsContainer;