import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, InputGroup, Offcanvas } from 'react-bootstrap'
import { FaPlay } from "react-icons/fa";
import { TbPlayerPause } from "react-icons/tb";

const ExOffCanvas = ({ extensionData, show, handleClose, handleSave }) => {
  if (!extensionData) return null;

  const [name, setName] = useState(extensionData.name || "");
  const [email, setEmail] = useState(extensionData.email || "");
  const [callerID, setCallerID] = useState(extensionData.callerID || "");
  const [dnd, setDnd] = useState(extensionData.dnd || false);
  const [voicemail, setVoicemail] = useState(extensionData.voicemail || false);
  const [number, setNumber] = useState(extensionData.number || "");
  const [delay, setDelay] = useState(extensionData.delay || "10");
  const [timeout, setTimeout] = useState(extensionData.timeout || "20");
  const [greeting, setGreeting] = useState(extensionData.greeting || "");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCallerIDChange = (e) => { setCallerID(e.target.value); setCallerID(formatPhoneNumber(e.target.value)); }
  const handleDndChange = (e) => setDnd(e.target.checked);
  const handleVoicemailChange = (e) => setVoicemail(e.target.checked);
  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleDelayChange = (e) => setDelay(e.target.value);
  const handleTimeoutChange = (e) => setTimeout(e.target.value);
  const handleGreetingChange = (e) => setGreeting(e.target.value);

  const handleSaveClick = () => {
    const updatedExtension = {
      ...extensionData,
      name: name,
      email: email,
      callerID: callerID,
      voicemail: voicemail,
      dnd: dnd,
    };
    handleSave(updatedExtension);
  };



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




  useEffect(() => {
    if (extensionData) {
      setName(extensionData.name || "");
      setEmail(extensionData.email || "");
      setCallerID(extensionData.callerID || "");
      setDnd(extensionData.dnd || false);
      setVoicemail(extensionData.voicemail || false);
      setNumber(extensionData.number || "");
      setDelay(extensionData.delay || "10");
      setTimeout(extensionData.timeout || "20");
      setGreeting(extensionData.greeting || "");
    }
  }, [extensionData]);



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
    <Offcanvas className="pt-4" show={show} placement="end">
      {/* <Offcanvas.Header>
        <Offcanvas.Title>Edit form</Offcanvas.Title>
      </Offcanvas.Header> */}
      <Offcanvas.Body>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Ext. Name</InputGroup.Text>
            <Form.Control
              placeholder="Enter Extension Name"
              aria-label="ExtName"
              aria-describedby="basic-addon1"
              value={name}
              onChange={handleNameChange}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">Caller ID (Public)</InputGroup.Text>
            <Form.Select
              aria-label="CallerID"
              value={callerID}
              onChange={handleCallerIDChange}
            >
              <option value="0">(877) 595 8635</option>
              <option value="1">(877) 595 8635</option>
              <option value="2">(877) 595 8635</option>
              <option value="3">(877) 595 8635</option>
            </Form.Select>
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Check
              type="switch"
              id="dnd-switch"
              label="Do Not Disturb"
              reverse
              checked={dnd}
              onChange={handleDndChange}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Check
              type="switch"
              id="voicemail-switch"
              label="Configure Voicemail"
              reverse
              checked={voicemail}
              onChange={handleVoicemailChange}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">Email</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              aria-label="Email"
              aria-describedby="basic-addon3"
              value={email}
              onChange={handleEmailChange}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon4">Password</InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Enter password"
              aria-label="Password"
              aria-describedby="basic-addon4"
            />
          </InputGroup>

          <InputGroup className="mb-3 d-flex align-items-center">
            <InputGroup.Text id="basic-addon5">Greeting</InputGroup.Text>
            <Form.Select
              aria-label="Select Greeting"
              value={greeting}
              onChange={handleGreetingChange}
            >
              <option>file name of greeting...</option>
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
          {isPlaying&&
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

          <hr></hr>
          <InputGroup className="mb-3">
            <Form.Check
              type="switch"
              id="follow-me-switch"
              label="Follow Me"
              reverse
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon6">Number</InputGroup.Text>
            <Form.Control
              placeholder="(XXX) XXX-XXXX"
              aria-label="phone-number"
              aria-describedby="basic-addon6"
              value={callerID}
              onChange={handleCallerIDChange}
              maxLength={14}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon7">Delay</InputGroup.Text>
            <Form.Select
              aria-label="Select Delay"
              value={delay}
              onChange={handleDelayChange}
            >
              <option value="1">10</option>
              <option value="2">20</option>
              <option value="3">30</option>
            </Form.Select>
            <InputGroup.Text id="basic-addon8">Timeout</InputGroup.Text>
            <Form.Select
              aria-label="Select Timeout"
              value={timeout}
              onChange={handleTimeoutChange}
            >
              <option value="1">20</option>
              <option value="2">30</option>
              <option value="3">40</option>
            </Form.Select>
          </InputGroup>
          <hr></hr>
          <div className="d-flex justify-content-end">
            <Button className="mx-2 text-decoration-none" variant="link" onClick={handleClose}>Close</Button>
            <Button className="mx-2" variant="primary" onClick={() => { handleSaveClick(); handleClose(); }}>Save</Button>
          </div>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ExOffCanvas;
