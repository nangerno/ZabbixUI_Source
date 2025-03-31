import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FaHospitalUser, FaPhoneVolume, FaBuilding, FaPhoneAlt, FaExchangeAlt, FaBolt, FaCommentDots, FaUsers, FaClock, FaSms } from 'react-icons/fa';
import { GrLogout } from 'react-icons/gr';

const Sidebar = ({ activeItem, setActiveItem, handleLogout }) => {

  const menuItems = [
    { name: 'Company Name', icon: FaBuilding },
    { name: 'Extension Control', icon: FaPhoneAlt },
    { name: 'Call Forwarding', icon: FaExchangeAlt },
    { name: 'BLF/Speedials', icon: FaBolt },
    { name: 'IVR Greeting', icon: FaCommentDots },
    { name: 'Ring Group', icon: FaUsers },
    { name: 'Operating Hours', icon: FaClock },
    { name: 'SMS Texting', icon: FaSms },
    { name: 'Call Detail Records', icon: FaPhoneVolume },
    { name: 'Profile', icon: FaHospitalUser }
  ];


  return (
    <div className="d-flex flex-column h-100">
      <Nav className="flex-column bg-dark sidebar flex-grow-1">
        <Navbar.Brand href="#">
          <img className="p-3" src="logo-title.png" alt="Logo"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </Navbar.Brand>
        {menuItems.map((item, index) => (
          <Nav.Item key={index}>
            <Nav.Link
              className={`d-flex align-items-center ${activeItem === index ? 'active' : ''}`}
              onClick={() => setActiveItem(index)}
            >
              <item.icon />
              {item.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div className="mt-auto p-3 text-light bg-dark" style={{ borderTop: "1px solid #444" }}>
        <div className="d-flex justify-content-between align-items-center">
          <span className='admin-title'>Albert Pangan</span>
          <GrLogout size={24} className="cursor-pointer" onClick={handleLogout} />
        </div>
        <span style={{ fontSize: '12px' }}>Admin</span>
      </div>
    </div>
  );
};

export default Sidebar;
