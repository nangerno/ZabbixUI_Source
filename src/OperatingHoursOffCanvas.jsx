
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, InputGroup, Offcanvas } from 'react-bootstrap';
import { DateRangePicker } from "@heroui/date-picker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OperatingHoursOffCanvas = ({ data, show, handleSave, handleClose }) => {
    if (!data) return null;

    const [holidayName, setHolidayName] = useState(data.holidayName || "");
    const [date, setDate] = useState(data.date || "");
    const [from, setFrom] = useState(data.from || "");
    const [to, setTo] = useState(data.to || "");

    const handleHolidayNameChange = (e) => setHolidayName(e.target.value);
    const handleDateChange = (e) => setDate(e.target.value);
    const handleFromChange = (e) => setFrom(e.target.value);
    const handleToChange = (e) => setTo(e.target.value);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const handleSaveClick = () => {
        const updateData = {
            ...data,
            holidayName: holidayName,
            date: date,
            from: from,
            to: to
        };
        handleSave(updateData);
    };

    useEffect(() => {
        if (data) {
            setHolidayName(data.holidayName || "");
            setDate(data.date || "");
            setFrom(data.from || "");
            setTo(data.to || "");
        }
    }, [data]);
    return (
        <>
            <Offcanvas show={show} placement="end">
                <Offcanvas.Body>
                    <Form>
                        <h4>Edit Holiday</h4>
                        <Form.Label htmlFor="hourto">Holiday Name</Form.Label>
                        <Form.Control
                            placeholder="Holiday Name"
                            aria-label="holiday-name"
                            aria-describedby="basic-addon1"
                            value={holidayName}
                            onChange={handleHolidayNameChange}
                        />

                        <Form.Label className="">Date</Form.Label>
                        <br></br>
                        <DatePicker
                            selected={startDate}
                            onChange={(dates) => {
                                const [start, end] = dates;
                                setStartDate(start);
                                setEndDate(end);
                                // handleDateChange();
                            }}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            className="form-control"
                            placeholderText="Select date range"
                        />
                        <br></br>
                        <Form.Label htmlFor="hourto">Business Hours</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="time"
                                className="modalTextField"
                                style={{ paddingRight: "6px" }}
                                value={from}
                                onChange={handleFromChange}
                            />
                            <InputGroup.Text id="basic-addon1">to</InputGroup.Text>
                            <Form.Control
                                type="time"
                                className="modalTextField"
                                style={{ paddingRight: "6px" }}
                                value={to}
                                onChange={handleToChange}
                            />
                        </InputGroup>
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

export default OperatingHoursOffCanvas;