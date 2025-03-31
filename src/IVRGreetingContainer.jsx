import { useState } from "react";
import { Table, Form, InputGroup, Tabs, Tab, Row, Col } from "react-bootstrap";
import { FaEdit, FaSearch } from "react-icons/fa";
import IVROffCanvas from "./IVROffCanvas";

const initialIVRData = [
  { id: 600, ivrName: "TVoIP 619", description: "619 is for reference" },
  { id: 713, ivrName: "TVoIP 877", description: "877 is number" },
  { id: 715, ivrName: "TVoIP IVR Chime 619", description: "just a second" },
  { id: 714, ivrName: "TVoIP IVR Chime 877", description: "sound" },
];

const IVRGreetingContainer = () => {
  const [search, setSearch] = useState("");
  const [ivrData, setIVRData] = useState(initialIVRData);
  const [editID, setEditID] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setEditID(item.id);
    setShow(true);
  };

  const handleSave = (updateData) => {
    setIVRData((preData) =>
      preData.map((item) =>
        item.id === updateData.id ? updateData : item
      )
    );
    handleClose();
  };

  return (
    <>
      <div className="p-4">
        <h2 className="mb-4">IVR Greeting</h2>
        <Tabs
          activeKey="general"
          defaultActiveKey="profile"
          id="sms-tabs"
          className="mb-3"
        >
          <Tab className="p-4" eventKey="general" title="General">
            <Row className="mb-3 g-2">
              <Col xs={12} sm={6} md={3}>
                <InputGroup>
                  <InputGroup.Text>
                    <FaSearch />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search IVR"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Row>

            <div className="table-responsive">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th style={{width:"50%"}}>IVR Name</th>
                    <th style={{width:"40%"}}>Description</th>
                    <th style={{width:"10%"}}></th>
                  </tr>
                </thead>
                <tbody>
                  {ivrData
                    .filter((item) =>
                      item.ivrName.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                      <tr key={item.id}>
                        <td>{item.ivrName}</td>
                        <td>{item.description}</td>
                        <td className="text-center">
                          <FaEdit
                            className="text-primary"
                            onClick={() => handleShow(item)}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>

            {editID !== null && (
              <IVROffCanvas
                ivrData={ivrData.find((item) => item.id === editID)}
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

export default IVRGreetingContainer;
