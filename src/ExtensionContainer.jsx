import { useState } from "react";
import { Table, Form, Tabs, Tab, Row, Col, InputGroup } from "react-bootstrap";
import { FaMoon, FaVoicemail, FaEdit, FaCircle, FaSearch } from "react-icons/fa";
import ExOffCanvas from "./ExOffCanvas";

const initialExtensions = [
  { id: 1005, isOnline: false, name: "Albert", email: "Albert@transparentvoip.com", callerID: "(877) 595 8635", voicemail: true, dnd: false },
  { id: 100001, isOnline: false, name: "Awais", email: "Awais@transparentvoip.com", callerID: "(877) 595 8635", voicemail: true, dnd: false },
  { id: 1000, isOnline: true, name: "Nam", email: "Nam@transparentvoip.com", callerID: "(877) 595 8635", voicemail: false, dnd: true },
  { id: 1013, isOnline: true, name: "Vinny", email: "Vinny@transparentvoip.com", callerID: "(877) 595 8635", voicemail: true, dnd: false },
];

const ExtensionContainer = () => {
  const [search, setSearch] = useState("");
  const [extensions, setExtensions] = useState(initialExtensions);
  const [editID, setEditID] = useState(null);
  const [show, setShow] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = (ext) => {
    setEditID(ext.id);
    setShow(true);
  };

  const handleSave = (updatedExtension) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.id === updatedExtension.id ? updatedExtension : ext
      )
    );
    handleClose();
  };

  return (
    <>
      <div className="p-4">
        <h2 className="mb-4">Extension Control</h2>
        <Tabs
          activeKey="general"
          defaultActiveKey="profile"
          id="sms-tabs"
          className="mb-3"
        >
          <Tab className="p-4" eventKey="general" title="General">
            <Row className="mb-3 g-2">
              <Col xs={12} sm={4} md={4} lg={4} xl={2}>
                <InputGroup>
                  <InputGroup.Text>
                    <FaSearch />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search Extensions"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col xs={12} sm={4} md={4} lg={4} xl={2}>
                <Form.Select aria-label="Select Voicemail">
                  <option value="0">Voicemail</option>
                  <option value="1">DND</option>
                </Form.Select>
              </Col>

              <Col xs={12} sm={4} md={4} lg={4} xl={2}>
                <Form.Select aria-label="Select DND">
                  <option value="0">DND</option>
                  <option value="1">Voicemail</option>
                </Form.Select>
              </Col>
            </Row>

            <div className="table-responsive">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>Ext. Number</th>
                    <th style={{ width: "20%" }}>Ext. Name</th>
                    <th style={{ width: "20%" }}>Email Address</th>
                    <th style={{ width: "20%" }}>Public Caller ID</th>
                    <th style={{ width: "10%" }}>Voicemail</th>
                    <th style={{ width: "10%" }}>DND</th>
                    <th style={{ width: "10%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {extensions
                    .filter((ext) =>
                      ext.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((ext) => (
                      <tr key={ext.id}>
                        <td>
                          <FaCircle
                            style={{ width: '0.5rem', marginRight: '0.1rem' }}
                            className={ext.isOnline ? "text-primary" : ""}
                          />
                          {ext.id}
                        </td>
                        <td>{ext.name}</td>
                        <td>{ext.email}</td>
                        <td>{ext.callerID}</td>
                        <td>
                          <FaVoicemail className={ext.voicemail ? "text-primary" : "text-secondary"} />
                        </td>
                        <td>
                          <FaMoon className={ext.dnd ? "text-primary" : "text-secondary"} />
                        </td>
                        <td className="text-center">
                          <FaEdit
                            className={ext.dnd ? "text-primary" : "text-secondary"}
                            onClick={() => handleShow(ext)}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>

            {editID !== null && (
              <ExOffCanvas
                extensionData={extensions.find((ext) => ext.id === editID)}
                show={show}
                handleClose={handleClose}
                handleSave={handleSave}
              />
            )}
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default ExtensionContainer;
