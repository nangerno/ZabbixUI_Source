import React, { useState, useEffect } from "react";
import { Row, Col, Button, Offcanvas } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ComponyNameContainer from "./CompanyNameContainer";
import ExtensionContainer from "./ExtensionContainer";
import CallForwardContainer from "./CallForwardingContainer";
import SpeedDialsContainer from "./SpeedDialsContainer";
import IVRGreetingContainer from "./IVRGreetingContainer";
import RingGroupContainer from "./RingGroupContainer";
import OperatingHoursContainer from "./OperatingHoursContainer";
import SMSTextingContainer from "./SMStextingContainer";
import CallDetailRecordContainer from "./CallDetailRecordContainer";
import ProfileContainer from "./ProfileContainer";

const Layout = ({ handleLogout }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    if (activeItem !== null) {
      setShowSidebar(false);
    }
  }, [activeItem]);
  return (
    <>
      <Button
        variant="dark"
        className="d-md-none m-2"
        onClick={() => setShowSidebar(true)}
      >
        ☰ Menu
      </Button>
      <Row className="g-0">
        <Col xl={2} lg={2} md={2} className="d-none d-md-block sidebar">
          <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} handleLogout={handleLogout} />
        </Col>
        <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} className="bg-dark">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} handleLogout={handleLogout} />
          </Offcanvas.Body>
        </Offcanvas>
        <Col xl={10} lg={10} md={10}>
          {activeItem === 0 && <ComponyNameContainer />}
          {activeItem === 1 && <ExtensionContainer />}
          {activeItem === 2 && <CallForwardContainer />}
          {activeItem === 3 && <SpeedDialsContainer />}
          {activeItem === 4 && <IVRGreetingContainer />}
          {activeItem === 5 && <RingGroupContainer />}
          {activeItem === 6 && <OperatingHoursContainer />}
          {activeItem === 7 && <SMSTextingContainer />}
          {activeItem === 8 && <CallDetailRecordContainer />}
          {activeItem === 9 && <ProfileContainer />}
        </Col>
      </Row>
    </>
  );
};

export default Layout;