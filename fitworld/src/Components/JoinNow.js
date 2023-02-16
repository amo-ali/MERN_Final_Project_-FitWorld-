import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Col, Form, FormLabel, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { JoinContext } from "./Main";

function JoinNow() {
  const navigate = useNavigate();
  const { userjoin, setUserJoin, setNavChange } = useContext(JoinContext);
  const [joinInput, setJoinInput] = useState("");

  const signUpHandler = (e) => {
    const { name, value } = e.target;
    setJoinInput({ ...joinInput, [name]: value });
  };
  console.log("input", joinInput);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      console.log("axxx", joinInput);
      axios
        .post("http://localhost:5000/users/", joinInput)
        .then((res) => {
          console.log(res);
          setUserJoin([...userjoin, res.data]);
          alert("Joined Successfully");
          navigate("/dashboard", { replace: true });
          setNavChange(true);
        })
        .catch((err) => alert("Joined Again", err));
    }

    setValidated(true);
  };
  return (
    <div>
      <div className="signUp_back d-flex align-items-center justify-content-center">
        <div id="joinus">
          <span>Join Us</span>
        </div>
      </div>
      <div className=" p-2 d-flex align-items-center justify-content-center">
        <div className="signup">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="text-center title">
              <FormLabel className="ml-3 ">Join FitWorld</FormLabel>
            </div>
            <Row className="mb-3">
              <Form.Group as={Col} md="11" controlId="validationCustom01">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={joinInput.name}
                  onChange={signUpHandler}
                  placeholder="Name"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="5" controlId="validationCustom02">
                <Form.Label>Height:</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="ft"
                    aria-describedby="inputGroupPrepend"
                    name="ft"
                    value={joinInput.ft}
                    onChange={signUpHandler}
                    required
                    hasValidation
                  />
                  <InputGroup.Text id="inputGroupPrepend">ft</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="in"
                    aria-describedby="inputGroupPrepend"
                    name="inches"
                    value={joinInput.inches}
                    onChange={signUpHandler}
                    required
                    hasValidation
                  />
                  <InputGroup.Text id="inputGroupPrepend">in</InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="validationCustomUsername">
                <Form.Label>Weight:</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder="Weight"
                    aria-describedby="inputGroupPrepend"
                    name="weight"
                    value={joinInput.weight}
                    onChange={signUpHandler}
                    required
                    hasValidation
                  />
                  <InputGroup.Text id="inputGroupPrepend">kg</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="8" controlId="validationCustom04">
                <Form.Label>Age:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="age"
                  value={joinInput.age}
                  onChange={signUpHandler}
                  placeholder="age"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" id="btn" className="btn btn-white ">
              Join
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default JoinNow;
