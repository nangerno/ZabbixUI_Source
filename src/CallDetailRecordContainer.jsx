import React, { useState } from "react";
import { Form, InputGroup, Tabs, Tab, Row, Col, Table } from "react-bootstrap";
import { FaPlay, FaMoon, FaVoicemail, FaEdit, FaCircle, FaSearch } from "react-icons/fa";
import { MdDownload, MdOutlineArrowOutward, } from "react-icons/md";
import { GoArrowDownRight, GoArrowBoth } from "react-icons/go";

const CallDetailRecordContainer = () => {
    const initialData = [
        { id: 0, arrow: "up", extNumber: 1005, extName: "Albert", callerNo: 1005, destination: "(877) 595 8635", date: "10 Feb 2025", time: "01:47:27 pm", duration: "01:47:27", hangupCause: "Normal Clearing", recording: "" },
        { id: 1, arrow: "down", extNumber: 1005, extName: "Albert", callerNo: 1005, destination: "(877) 595 8635", date: "10 Feb 2025", time: "01:47:27 pm", duration: "01:47:27", hangupCause: "Normal Clearing", recording: "" },
        { id: 2, arrow: "both", extNumber: 1005, extName: "Albert", callerNo: 1005, destination: "(877) 595 8635", date: "10 Feb 2025", time: "01:47:27 pm", duration: "01:47:27", hangupCause: "Normal Clearing", recording: "" },
        { id: 3, arrow: "up", extNumber: 1005, extName: "Albert", callerNo: 1005, destination: "(877) 595 8635", date: "10 Feb 2025", time: "01:47:27 pm", duration: "01:47:27", hangupCause: "Normal Clearing", recording: "" },
    ]

    return (
        <>
            <div className="p-4">
                <h2 className="mb-4">Call Detail Records</h2>
                <Tabs
                    activeKey="general"
                    defaultActiveKey="profile"
                    id="sms-tabs"
                    className="mb-3"
                >
                    <Tab className="p-4" eventKey="general" title="General">
                        <Row className="g-2">
                            <Col xs={12} md={2}>
                                <Form.Group className="d-flex align-items-center">
                                    <Form.Label column className="p-2">
                                        Extension
                                    </Form.Label>
                                    <Form.Select aria-label="">
                                        <option value="0">Show All</option>
                                        <option value="1">DND</option>
                                    </Form.Select>
                                </Form.Group>

                            </Col>
                            <Col xs={12} md={1}></Col>
                            <Col xs={12} md={2}>
                                <Form.Group className="d-flex align-items-center">
                                    <Form.Label column className="p-2">
                                        Date
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="date"
                                        aria-describedby=""
                                    />
                                </Form.Group>

                            </Col>
                            <Col xs={12} md={2}>
                                <Form.Group className="d-flex align-items-center">
                                    <Form.Label column className="p-2">
                                        to
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="date"
                                        aria-describedby=""
                                    />
                                </Form.Group>

                            </Col>
                            <Col xs={12} md={1}></Col>
                            <Col xs={12} md={2}>
                                <Form.Group className="d-flex align-items-center">
                                    <Form.Label column className="p-2">
                                        Time
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="date"
                                        aria-describedby=""
                                    />
                                </Form.Group>

                            </Col>
                            <Col xs={12} md={2}>
                                <Form.Group className="d-flex align-items-center">
                                    <Form.Label column className="p-2">
                                        to
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="date"
                                        aria-describedby=""
                                    />
                                </Form.Group>

                            </Col>
                            <Col xs={12} md={4}></Col>
                        </Row>


                        <div className="table-responsive">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th style={{ width: "10%" }}>Ext. Number</th>
                                        <th style={{ width: "10%" }}>Ext. Name</th>
                                        <th style={{ width: "10%" }}>Caller No.</th>
                                        <th style={{ width: "10%" }}>Destination</th>
                                        <th style={{ width: "10%" }}>Date</th>
                                        <th style={{ width: "10%" }}>Time</th>
                                        <th style={{ width: "10%" }}>Duration</th>
                                        <th style={{ width: "20%" }}>Hangup Cause</th>
                                        <th style={{ width: "5%" }}>Recording</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {initialData
                                        // .filter((item) =>
                                        //     item.name.toLowerCase().includes("")
                                        // )
                                        .map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    {item.arrow === "up" && <MdOutlineArrowOutward size={20} className="uparrow"/>}
                                                    {item.arrow === "down" && <GoArrowDownRight size={20} className="downarrow"/>}
                                                    {item.arrow === "both" && <GoArrowBoth size={20}  className="botharrow"/>}
                                                    {item.extNumber}
                                                </td>
                                                <td>{item.extName}</td>
                                                <td>{item.callerNo}</td>
                                                <td>{item.destination}</td>
                                                <td>{item.date}</td>
                                                <td>{item.time}</td>
                                                <td>{item.duration}</td>
                                                <td>{item.hangupCause}</td>
                                                <td className="d-flex justify-content-center align-items-center gap-3">
                                                    <FaPlay className="text-primary cursor-pointer" size={20} />
                                                    <MdDownload className="text-primary cursor-pointer" size={24} />
                                                </td>

                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default CallDetailRecordContainer;