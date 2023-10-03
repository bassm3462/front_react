import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
export default function AddEmploy() {
    const [show, setShow] = useState(false),
        [userID, setUserID] = useState(""),
        [DepartmentID, setDepartmentID] = useState(""),
        handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch();
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employ To Department</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-outline flex-fill mb-3">
                        <select
                            class="form-select"
                            aria-label="Default select example"
                            value={userID}
                            onchange={(e) => {
                                setUserID(e.target.value);
                            }}
                        >
                            <option selected>Open this select Type user</option>
                            <option value="Employ">Employ</option>
                            <option value="Costumer">Costumer</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-0">
                        <div className="form-outline flex-fill mb-2">
                            <select
                                class="form-select"
                                aria-label="Default select example"
                                value={DepartmentID}
                                onChange={(e) => {
                                    setDepartmentID(e.target.value);
                                }}
                            >
                                <option selected>Open this select Gender</option>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </select>
                        </div>
                    </div>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleClose}
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
