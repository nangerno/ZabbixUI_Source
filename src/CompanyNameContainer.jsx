import React, { useState } from "react";
import { Table, Form, Button, InputGroup, Card, Tabs, Tab, Row, Col } from "react-bootstrap";
import { FaMoon, FaVoicemail, FaEdit, FaCircle } from "react-icons/fa";

const ComponyNameContainer = () => {
    return (
        <>
            <div className="p-4">
                <h2 className="mb-4">Compony Name</h2>
                <Tabs
                    activeKey="general"
                    defaultActiveKey="profile"
                    id="sms-tabs"
                    className="mb-3"
                >
                    <Tab className="p-4" eventKey="general" title="General">
                    

                    </Tab>


                </Tabs>

            </div>
        </>
    )
}


export default ComponyNameContainer;