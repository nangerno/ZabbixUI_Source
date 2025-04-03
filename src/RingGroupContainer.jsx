import { useState } from "react";
import { Table, Form, InputGroup, Tabs, Tab, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaEdit, FaSearch } from "react-icons/fa";
import IVROffCanvas from "./IVROffCanvas";
import RingOffCanvas from "./RingOffCanvas";

const initialData = [
  { id: 1, name: "TVoIP 619", note: "619 is for reference", destinations: "1010, 2034, 45343, 3343, 32432432, 3423, 32423" },
  { id: 2, name: "TVoIP 877", note: "877 is number", destinations: "1010, 23432, 342342, 32114, 566, 434543, 45432, 9779" },
  { id: 3, name: "TVoIP IVR Chime 619", note: "just a second", destinations: "1010, 987667, 45654, 4532, 2135, 656" },
  { id: 4, name: "TVoIP IVR Chime 877", note: "sound", destinations: "1010, 9876, 5645, 4211, 2346, 3245" },
];

const RingGroupContainer = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(initialData);
  const [editID, setEditID] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setEditID(item.id);
    setShow(true);
  };

  const handleSave = (updateData) => {
    setData((preData) =>
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
                    <th>Name</th>
                    <th>Destinations</th>
                    <th>Notes</th>
                    {/* <th></th> */}
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter((item) =>
                      item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => {
                      const maxDestinations = 4;
                      const destinationsArray = Array.isArray(item.destinations) ? item.destinations : item.destinations.split(",");
                      const displayedDestinations = destinationsArray.slice(0, maxDestinations).join(", ");
                      const remainingDestinations = destinationsArray.slice(maxDestinations);
                      const remainingCount = destinationsArray.length - maxDestinations;

                      return (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minWidth: "250px" }}>
                            <span>{displayedDestinations}</span>
                            {remainingCount > 0 && (
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip id={`tooltip-${item.id}`}>
                                    {remainingDestinations.join(", ")}
                                  </Tooltip>
                                }
                              >
                                <span
                                  style={{
                                    color: "#7900db",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    textAlign: "right",
                                    flexShrink: 0,
                                    minWidth: "50px",
                                    textDecoration: "underline"
                                  }}
                                >
                                  +{remainingCount} more
                                </span>
                              </OverlayTrigger>
                            )}
                          </td>


                          <td>{item.note}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div>

            {/* {editID !== null && (
              <RingOffCanvas
                data={data.find((item) => item.id === editID)}
                show={show}
                handleClose={handleClose}
                handleSave={handleSave}
              />
            )} */}
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default RingGroupContainer;
