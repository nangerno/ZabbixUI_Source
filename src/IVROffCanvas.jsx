
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, InputGroup, Offcanvas } from 'react-bootstrap'
import { FaPlay, FaRegTrashAlt, FaPlusCircle } from 'react-icons/fa';
import { TbPlayerPause } from "react-icons/tb";

const IVROffCanvas = ({ ivrData, show, handleClose, handleSave }) => {
    if (!ivrData) return null;
    const [ivrName, setIvrName] = useState(ivrData.ivrName || "");
    const [id, setID] = useState(ivrData.id || "");
    const [description, setDescription] = useState(ivrData.description || "");
    const [menuOptions, setMenuOptions] = useState([{ id: Date.now(), key: "", action: "" }]);

    const handleIVRNameChange = (e) => setIvrName(e.target.value);
    const handleExtIDChange = (e) => setID(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const handleSaveClick = () => {
        const updateData = {
            ...ivrData,
            id: id,
            ivrName: ivrName,
            description: description
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
        if (ivrData) {
            setIvrName(ivrData.ivrName || "");
            setID(ivrData.id || "");
            setDescription(ivrData.description || "");
        }
    }, [ivrData]);



    const [isPlaying, setIsPlaying] = useState(false)
    const [seedValue, setSeedValue] = useState(0);
    const handleChangeSeedValue = (event) => {
        const newTime = event.target.value;
        setSeedValue(newTime);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeedValue((prevValue) => {
                if (prevValue >= 100) {
                    clearInterval(interval);
                    setIsPlaying(false);
                    return 100;
                }
                return prevValue + 0.1;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

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
                                value={ivrName}
                                onChange={handleIVRNameChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                            <Form.Control
                                placeholder="Description"
                                aria-label="Description"
                                aria-describedby="basic-addon1"
                                value={description}
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
                            {isPlaying ? (
                                <TbPlayerPause className="mx-2" onClick={() => setIsPlaying(false)} />
                            ) : (
                                <FaPlay className="mx-2" onClick={() => setIsPlaying(true)} />
                            )}
                        </InputGroup>

                        {isPlaying &&
                            (<Form.Range
                                min={0}
                                max={100}
                                step={0.1}
                                value={seedValue}
                                onChange={handleChangeSeedValue}
                            />)}
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
                        <h6>Configure the menu</h6>
                        <p style={{ fontSize: '15px' }}>Define caller options the IVR menu</p>

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
                            <FaPlusCircle className="mx-2" style={{ fontSize: '2em' }} onClick={handleAddRow} />
                        </div>
                        <hr></hr>
                        <p style={{ fontSize: '15px' }}>The exit action to be performed if the IVR exits</p>
                        <InputGroup className="mb-3 d-flex align-items-center">
                            <InputGroup.Text id="basic-addon5">Exit Action</InputGroup.Text>
                            <Form.Control
                                readOnly
                                placeholder="4002 Support VM"
                                aria-label="IVRName"
                                aria-describedby="basic-addon1"
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

export default IVROffCanvas;