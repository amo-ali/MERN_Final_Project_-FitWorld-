import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function BMI() {
  const [BMInput, setBMInput] = useState("");
  const [showBMI, setShowBMI] = useState("");
  const [show, setShow] = useState(false);
  const BMIHandler = (e) => {
    const { name, value } = e.target;
    setBMInput({ ...BMInput, [name]: value });
  };
  const BMICalulate = (input) => {
    const height = Number(input.height) / 100;
    const BMI = Number(input.weight) / Number(height) ** 2;
    const UserBMI = BMI.toFixed(2);
    if (UserBMI < 18.5) {
      setShowBMI(`Your are UnderWeight. Your BMI is ${UserBMI}`);
    } else if (UserBMI >= 18.5 && UserBMI <= 25) {
      setShowBMI(`Your are Normal. Your BMI is ${UserBMI}`);
    } else if (UserBMI > 25 && UserBMI <= 35) {
      setShowBMI(`Your are OverWeight. Your BMI is ${UserBMI}`);
    } else if (UserBMI > 35) {
      setShowBMI(`Your are Obesity. Your BMI is ${UserBMI}`);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="col-6 p-2 m-2 text-white border">
        <h3 id="h3">BMI Calculator</h3>
        <Form
          className="m-2"
          onSubmit={(e) => {
            e.preventDefault();
            BMICalulate(BMInput);
            setShow(true);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicWeight">
            <Form.Label>Weight(kg):</Form.Label>
            <Form.Control
              type="number"
              placeholder="Kg"
              name="weight"
              value={BMInput.weight}
              onChange={BMIHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Height(cm)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Height(cm)"
              name="height"
              value={BMInput.height}
              onChange={BMIHandler}
            />
          </Form.Group>
          <Button variant="outline-warning" type="submit">
            <p className="text-white">Check</p>
          </Button>
        </Form>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Body Mass Index(BMI)</Modal.Title>
        </Modal.Header>
        <Modal.Body>{showBMI}</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BMI;
