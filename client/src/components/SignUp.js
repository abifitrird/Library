import React from "react";
import { Modal, Form } from "react-bootstrap";
import UseModal from "./UseModal";
import SignIn from "./SignIn";

const SignUp = ({ isShowing, toggle }) => {
  const { showSignIn, toggleSignIn } = UseModal();

  return (
    <Modal show={isShowing} keyboard={false} centered onHide={toggle}>
      <Modal.Body>
        <h2>Sign Up</h2> <br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group>
            <Form.Control type="text" placeholder="Full Name" required />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" defaultValue="Gender required">
              <option selected disabled value="">
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control type="tel" placeholder="Phone" required />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              required
              as="textarea"
              placeholder="Address"
              rows={3}
            />
          </Form.Group>
        </Form>
        <button className="Button-o" type="submit" style={{ width: "100%" }}>
          Submit
        </button>
        <p style={{ textAlign: "center" }}>
          Already have an account ? Click{" "}
          <a href="#" onClick={toggleSignIn}>
            Here
          </a>
          <SignIn showSignIn={showSignIn} toggleSignIn={toggleSignIn} />
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
