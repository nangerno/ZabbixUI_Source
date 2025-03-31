
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, InputGroup, Offcanvas } from 'react-bootstrap'
import { FaPlay, FaRegTrashAlt, FaPlusCircle } from 'react-icons/fa';

const RingOffCanvas = ({ data, show, handleClose, handleSave }) => {
    if (!data) return null;
    const [name, setName] = useState(data.name || "");
    const [id, setID] = useState(data.id || "");
    const [note, setNote] = useState(data.note || "");
    const [menuOptions, setMenuOptions] = useState([{ id: Date.now(), key: "", action: "" }]);

    const handleIVRNameChange = (e) => setName(e.target.value);
    const handleExtIDChange = (e) => setID(e.target.value);
    const handleDescriptionChange = (e) => setNote(e.target.value);

    const handleSaveClick = () => {
        const updateData = {
            ...data,
            id: id,
            name: name,
            note: note
        };
        handleSave(updateData);
    };


    const handleAddRow = () => {
        setMenuOptions([...menuOptions, { id: Date.now(), key: "", action: "" }]);
    };

    const handleRemoveRow = (rowId) => {
        setMenuOptions(menuOptions.filter((row) => row.id !== rowId));
    };

    useEffect(() => {
        if (data) {
            setName(data.name || "");
            setID(data.id || "");
            setNote(data.note || "");
        }
    }, [data]);

    return (
        <>
            <Offcanvas show={show} placement="end">
                <Offcanvas.Body>
                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">IVR Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Enter IVR Name"
                                aria-label="IVRName"
                                aria-describedby="basic-addon1"
                                value={name}
                                onChange={handleIVRNameChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                            <Form.Control
                                placeholder="Description"
                                aria-label="Description"
                                aria-describedby="basic-addon1"
                                value={note}
                                onChange={handleDescriptionChange}
                            />

                        </InputGroup>
                        <hr></hr>
                        <InputGroup className="mb-3 d-flex align-items-center">
                            <InputGroup.Text id="basic-addon5">Greeting</InputGroup.Text>
                            <Form.Select
                                aria-label="Greeting"
                            >
                                <option>Main_IVR</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <FaPlay className="mx-2" />
                        </InputGroup>

                        <Row className="justify-content-center g-3">
                            <Col xs={12} sm="auto" className="text-center">
                                <a href="#recordAudio" className="text-decoration-none">Record Audio</a>
                            </Col>
                            <Col xs={12} sm="auto" className="text-center">
                                <a href="#upload" className="text-decoration-none">Upload</a>
                            </Col>
                            <Col xs={12} sm="auto" className="text-center">
                                <a href="#ai-generated" className="text-decoration-none">AI-Generated</a>
                            </Col>
                        </Row>


                        <InputGroup className="pt-3 mb-3 d-flex align-items-center">
                            <InputGroup.Text id="basic-addon5">Timeout</InputGroup.Text>
                            <Form.Select
                                aria-label="timeout"
                            >
                                <option>30 Sec</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </InputGroup>
                        <hr></hr>
                        <h6>Destinations</h6>
                        <p style={{ fontSize: '15px' }}>Add destinations and parameters to the ring group.(seconds)</p>

                        {menuOptions.map((row) => (
                        <InputGroup key={row.id} className="mb-3 d-flex align-items-center">
                            <Form.Select aria-label="Key Selection">
                                <option>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Form.Select>
                            <Form.Select aria-label="Action Selection">
                                <option value="0">40002 Support VM</option>
                                <option value="1">40002 Support VM</option>
                                <option value="2">40002 Support VM</option>
                            </Form.Select>
                            <FaRegTrashAlt className="mx-2 text-danger" style={{ cursor: "pointer" }} onClick={() => handleRemoveRow(row.id)} />
                        </InputGroup>
                        ))}

                        <div className='text-center'>
                            <FaPlusCircle className="mx-2" style={{ fontSize: '2em' }} onClick={handleAddRow}/>
                        </div>
                        <hr></hr>
                        <p style={{ fontSize: '15px' }}>Timeout destination for this ring group</p>
                        <InputGroup className="mb-3 d-flex align-items-center">
                            <InputGroup.Text id="basic-addon5">Timeout Destination</InputGroup.Text>
                            <Form.Control
                                placeholder="4002 Support VM"
                                aria-label="IVRName"
                                aria-describedby="basic-addon1"
                                readOnly
                            />
                        </InputGroup>
                        <hr></hr>
                        <div className="d-flex justify-content-end">
                            <Button className="mx-2 text-decoration-none" variant="link" onClick={handleClose}>Close</Button>
                            <Button className="mx-2" variant="primary" onClick={() => { handleSaveClick(); handleClose(); }}>Save</Button>
                        </div>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default RingOffCanvas;