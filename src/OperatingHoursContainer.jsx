import React, { useState, useEffect } from "react";
import { Table, Form, Button, InputGroup, Modal, Tabs, Tab, Row, Col } from "react-bootstrap";
import OperatingHoursOffCanvas from "./OperatingHoursOffCanvas";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const initialData = [
    { id: 1, holidayName: "Washington's Birthday", date: "2024-02-02", from: "03:46", to: "22:46" },
    { id: 2, holidayName: "Washington's Birthday", date: "2024-02-02", from: "03:46", to: "22:46" },
];

const OperatingHoursContainer = () => {

    const [data, setData] = useState(initialData);
    const [editID, setEditID] = useState(null);
    const [deleteID, setDeleteID] = useState(null);
    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = (item) => {
        setDeleteID(item.id);
        setModalShow(true);
    };
    const handleDelete = (id) => {
        setData(prevData => prevData.filter(item => item.id !== id));
    }

    const handleAddData = () => {
        setEditID(0);
        setShow(true);
    }

    useEffect(() => {

    }, [data]);

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setEditID(item.id);
        setShow(true);
    };

    const handleSave = (updateData) => {
        setData((prevData) => {
            if (editID === 0) {
                return [...prevData, { ...updateData, id: prevData.length + 1 }];
            } else {
                return prevData.map((item) =>
                    item.id === updateData.id ? updateData : item
                );
            }
        });
        handleClose();
    };

    return (
        <>
            <div className="p-4">
                <h2 className="mb-4">Operating Hours</h2>
                <Tabs
                    activeKey="general"
                    defaultActiveKey="profile"
                    id="sms-tabs"
                    className="mb-3"
                >
                    <Tab className="p-4" eventKey="general" title="General">
                        <Row className="align-items-center mb-3 g-2">
                            <Col xs={12} sm={12} md={12} lg={12} xl={3}>
                                <h5>Holiday Hours</h5>
                                <p>Apply holiday hours to override normal operating hours</p>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={3} className="d-flex justify-content-md-start">
                                <Button variant="primary" onClick={() => handleAddData()}>Add Holidays</Button>
                            </Col>
                            <Col xs={12} sm={12} md={0} lg={0} xl={3}></Col>
                            <Col xs={12} sm={12} md={0} lg={0} xl={3}></Col>
                        </Row>
                        <div className="table-responsive">
                            <Table className="mt-3" striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th style={{ width: '30%' }}>Holiday</th>
                                        <th style={{ width: '30%' }}>Date</th>
                                        <th style={{ width: '30%' }}>Time</th>
                                        <th style={{ width: '10%' }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.holidayName}</td>
                                            <td>{item.date}</td>
                                            <td>{item.from + " to " + item.to}</td>
                                            <td style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                                                <FaEdit
                                                    className="text-primary mx-2 cursor-pointer"
                                                    onClick={() => handleShow(item)}
                                                    aria-label="Edit"
                                                    title="Edit"
                                                />
                                                <FaRegTrashAlt
                                                    className="text-danger mx-2 cursor-pointer"
                                                    onClick={() => handleModalShow(item)}
                                                    aria-label="Delete"
                                                    title="Delete"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>

                        <h5 className="pt-2">Day/Night Mode</h5>
                        <InputGroup className="mb-3">
                            <Form.Check
                                type="switch"
                                id="automatic-reply"
                                label="Warning message here..."
                                reverse
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox aria-label="Enable reminder message." />
                            <InputGroup.Text>Enable reminder message.</InputGroup.Text>
                        </InputGroup>
                        {editID !== null && (<OperatingHoursOffCanvas
                            data={data.find((item) => item.id === editID) || { holidayName: "", date: "", from: "", to: "" }}
                            show={show}
                            handleClose={handleClose}
                            handleSave={handleSave}
                        />)}
                        <Modal show={modalShow} onHide={handleClose}>
                            <Modal.Header>
                                <Modal.Title>Confirm to delete?</Modal.Title>
                            </Modal.Header>
                            {/* <Modal.Body>Are you confirm to delete this holiday?</Modal.Body> */}
                            <Modal.Footer>
                                <Button className="mx-2 text-decoration-none" variant="link" onClick={handleModalClose}>
                                    Close
                                </Button>
                                <Button variant="danger" onClick={() => { handleDelete(deleteID), handleModalClose() }}>
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default OperatingHoursContainer;