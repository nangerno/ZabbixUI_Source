import React, { useState } from "react";
import { Table, Form, Button, InputGroup, Dropdown, Card, Tabs, Tab, Row, Col, Stack, Figure, Pagination, Alert, Placeholder } from "react-bootstrap";
import { FaMoon, FaVoicemail, FaEdit, FaCircle, FaPhoneSquareAlt } from "react-icons/fa";


const SpeedDialsContainer = () => {


    const [selectedType, setSelectedType] = useState("SMS");
    const [selectedValue, setSelectedValue] = useState("");

    const optionsByType = {
        SMS: ["Andrew", "John", "Mike"],
        "Crystal 10002": ["Option A", "Option B", "Option C"],
        "Crystal 10003": ["Item 1", "Item 2", "Item 3"],
        "Crystal 10004": ["Choice X", "Choice Y", "Choice Z"],
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
                            <Col xs={6} sm={6} md={6} lg={3}>
                                <h2>Extension</h2>
                                <p>Choose the extension to update its home screen.</p>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={3}>
                                <Form.Select aria-label="" className="mt-2" onChange={handleChange}>
                                    <option value="1">Crystal 10001</option>
                                    <option value="2">Crystal 10002</option>
                                    <option value="3">Crystal 10003</option>
                                    <option value="4">Crystal 10004</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <div className="scale-down">
                            <Row>
                                <Col xs={0} sm={0} md={0} lg={2}></Col>
                                <Col xs={12} sm={12} md={12} lg={8} className="overflow-container">
                                    <Row>
                                        <Col xs={2} md={2} lg={2}>
                                            <div style={{ height: '60px' }}></div>
                                            <Form.Select
                                                className="mt-2"
                                                aria-label="Type Selection"
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#3e505e",
                                                }}
                                                value={selectedType}
                                                onChange={(e) => setSelectedType(e.target.value)}
                                            >
                                                <option value="1">None</option>
                                                <option value="2">BLF</option>
                                                <option value="3">Transfer</option>
                                                <option value="4">Line</option>
                                                <option value="5">Speed Dial</option>
                                                <option value="6">Call Park</option>
                                                <option value="7">Conference</option>
                                                <option value="8">Call Pickup</option>
                                                <option value="9">Voicemail</option>
                                            </Form.Select>
                                            <Form.Select
                                                className="mt-2"
                                                aria-label="Type Selection"
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#3e505e",
                                                }}
                                                value={selectedType}
                                                onChange={(e) => setSelectedType(e.target.value)}
                                            >
                                                <option value="1">None</option>
                                                <option value="2">BLF</option>
                                                <option value="3">Transfer</option>
                                                <option value="4">Line</option>
                                                <option value="5">Speed Dial</option>
                                                <option value="6">Call Park</option>
                                                <option value="7">Conference</option>
                                                <option value="8">Call Pickup</option>
                                                <option value="9">Voicemail</option>
                                            </Form.Select>
                                            <Form.Select
                                                className="mt-2"
                                                aria-label="Type Selection"
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#3e505e",
                                                }}
                                                value={selectedType}
                                                onChange={(e) => setSelectedType(e.target.value)}
                                            >
                                                <option value="1">None</option>
                                                <option value="2">BLF</option>
                                                <option value="3">Transfer</option>
                                                <option value="4">Line</option>
                                                <option value="5">Speed Dial</option>
                                                <option value="6">Call Park</option>
                                                <option value="7">Conference</option>
                                                <option value="8">Call Pickup</option>
                                                <option value="9">Voicemail</option>
                                            </Form.Select>
                                            <Form.Select
                                                className="mt-2"
                                                aria-label="Type Selection"
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#3e505e",
                                                }}
                                                value={selectedType}
                                                onChange={(e) => setSelectedType(e.target.value)}
                                            >
                                                <option value="1">None</option>
                                                <option value="2">BLF</option>
                                                <option value="3">Transfer</option>
                                                <option value="4">Line</option>
                                                <option value="5">Speed Dial</option>
                                                <option value="6">Call Park</option>
                                                <option value="7">Conference</option>
                                                <option value="8">Call Pickup</option>
                                                <option value="9">Voicemail</option>
                                            </Form.Select>
                                            <Form.Select
                                                className="mt-2"
                                                aria-label="Type Selection"
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#3e505e",
                                                }}
                                                value={selectedType}
                                                onChange={(e) => setSelectedType(e.target.value)}
                                            >
                                                <option value="1">None</option>
                                                <option value="2">BLF</option>
                                                <option value="3">Transfer</option>
                                                <option value="4">Line</option>
                                                <option value="5">Speed Dial</option>
                                                <option value="6">Call Park</option>
                                                <option value="7">Conference</option>
                                                <option value="8">Call Pickup</option>
                                                <option value="9">Voicemail</option>
                                            </Form.Select>
                                        </Col>
                                        <Col style={{ backgroundColor: '#ddd', flexGrow: 1 }} xs={8} md={8} lg={8}>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                color: 'white',
                                                fontSize: '1.5em',
                                                backgroundColor: "#3e505e",
                                                height: '40px',
                                                borderRadius: '10px',
                                                marginTop: '20px',
                                                padding: '0 15px'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <FaPhoneSquareAlt size={30} />
                                                    Crystal
                                                </div>
                                                <div>12:55 PM FRI, Jan 31</div>
                                            </div>
                                            <Row>
                                                <Col xs={3} md={3} lg={3}>
                                                    <Form.Select
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
                                                        <option value="">Crystal</option>
                                                        {optionsByType[selectedType]?.map((value, index) => (
                                                            <option key={index} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                    <Form.Select
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
                                                        <option value="">Catherine</option>
                                                        {optionsByType[selectedType]?.map((value, index) => (
                                                            <option key={index} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                    <Form.Select
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
                                                        <option value="">Richard</option>
                                                        {optionsByType[selectedType]?.map((value, index) => (
                                                            <option key={index} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                    <Form.Select
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
                                                        <option value="">Stephen</option>
                                                        {optionsByType[selectedType]?.map((value, index) => (
                                                            <option key={index} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                    <Form.Select
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
                                                        <option value="">Eric</option>
                                                        {optionsByType[selectedType]?.map((value, index) => (
                                                            <option key={index} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </Col>
                                                <Col xs={6} md={6} lg={6} className="d-flex justify-content-center">
                                                    <Figure className="text-center my-5">
                                                        <Figure.Image
                                                            style={{ maxWidth: "40%", height: "auto", borderRadius: "8px" }}
                                                            alt="171x180"
                                                            src="speedialsImg.png"
                                                        />
                                                    </Figure>
                                                </Col>

                                                <Col xs={3} md={3} lg={3}>
                                                    <Form.Select
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
                                                        <option value="">SMS</option>
                                                        {optionsByType[selectedType]?.map((value, index) => (
                                                            <option key={index} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                    <Form.Select
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
                                                        <option value="">James</option>
                                                        {optionsByType[selectedType]?.map((value, index) => (
                                                            <option key={index} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                    <Form.Select
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
                                                        <option value="">Andrew</option>
                                                        {optionsByType[selectedType]?.map((value, index) => (
                                                            <option key={index} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                    <Form.Select
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
                                                        <option value="">Meeting</option>
                                                        {optionsByType[selectedType]?.map((value, index) => (
                                                            <option key={index} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
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
                                                {Array(4).fill("").map((text, index) => (
                                                    <Col
                                                        key={index}
                                                        className="m-2 text-white d-flex align-items-center justify-content-center"
                                                        style={{ backgroundColor: "#3e505e", height: "40px", borderRadius: "10px" }}
                                                    >
                                                        {text}
                                                    </Col>
                                                ))}
                                            </Row>
                                            <div className="d-flex justify-content-end">
                                                <Button variant="primary" className="m-2">Save</Button>
                                            </div>

                                        </Col>

                                        <Col xs={2} md={2} lg={2}>
                                            <div style={{ height: '60px' }}></div>
                                            <Form.Select
                                                className="mt-2"
                                                aria-label="Type Selection"
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#3e505e"
                                                }}
                                                value={selectedType}
                                                onChange={(e) => setSelectedType(e.target.value)}
                                            >
                                                <option value="1">None</option>
                                                <option value="2">BLF</option>
                                                <option value="3">Transfer</option>
                                                <option value="4">Line</option>
                                                <option value="5">Speed Dial</option>
                                                <option value="6">Call Park</option>
                                                <option value="7">Conference</option>
                                                <option value="8">Call Pickup</option>
                                                <option value="9">Voicemail</option>
                                            </Form.Select>
                                            <Form.Select
                                                className="mt-2"
                                                aria-label="Type Selection"
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#3e505e"
                                                }}
                                                value={selectedType}
                                                onChange={(e) => setSelectedType(e.target.value)}
                                            >
                                                <option value="1">None</option>
                                                <option value="2">BLF</option>
                                                <option value="3">Transfer</option>
                                                <option value="4">Line</option>
                                                <option value="5">Speed Dial</option>
                                                <option value="6">Call Park</option>
                                                <option value="7">Conference</option>
                                                <option value="8">Call Pickup</option>
                                                <option value="9">Voicemail</option>
                                            </Form.Select>
                                            <Form.Select
                                                className="mt-2"
                                                aria-label="Type Selection"
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#3e505e"
                                                }}
                                                value={selectedType}
                                                onChange={(e) => setSelectedType(e.target.value)}
                                            >
                                                <option value="1">None</option>
                                                <option value="2">BLF</option>
                                                <option value="3">Transfer</option>
                                                <option value="4">Line</option>
                                                <option value="5">Speed Dial</option>
                                                <option value="6">Call Park</option>
                                                <option value="7">Conference</option>
                                                <option value="8">Call Pickup</option>
                                                <option value="9">Voicemail</option>
                                            </Form.Select>
                                            <Form.Select
                                                className="mt-2"
                                                aria-label="Type Selection"
                                                style={{
                                                    color: "white",
                                                    backgroundColor: "#3e505e"
                                                }}
                                                value={selectedType}
                                                onChange={(e) => setSelectedType(e.target.value)}
                                            >
                                                <option value="1">None</option>
                                                <option value="2">BLF</option>
                                                <option value="3">Transfer</option>
                                                <option value="4">Line</option>
                                                <option value="5">Speed Dial</option>
                                                <option value="6">Call Park</option>
                                                <option value="7">Conference</option>
                                                <option value="8">Call Pickup</option>
                                                <option value="9">Voicemail</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={0} sm={0} md={0} lg={2}></Col>
                            </Row>
                        </div>
                    </Tab>
                </Tabs >

            </div >
        </>
    )
}


export default SpeedDialsContainer;