import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Modal } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import UseModal from "../components/UseModal";
import SignUp from "./SignUp";

const SignIn = ({ showSignIn, toggleSignIn }) => {
  // Penggunaan Modal
  const { isShowing, toggle } = UseModal();

  // Penggunaan context
  const [state, dispatch] = useContext(CartContext);

  // Membuat state untuk menampung data sementara
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Destruct element formData menjadi email dan password
  const { email, password } = formData;

  // Fungsi dari event yang dibuat untuk menghandle perubahan pada field input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi dari event untuk menghandle pengiriman data saat klik submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + ":" + password);
    if (email === "frd@mail.com" && password === "1111") {
      console.log("Berhasil Login");
      dispatch({
        type: "LOGIN",
      });
    } else {
      console.log("Gagal Login");
    }
  };

  return (
    <Modal show={showSignIn} keyboard={false} centered onHide={toggleSignIn}>
      <Modal.Body>
        <h2>Sign In</h2> <br />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <button
              className="Button-o"
              type="submit"
              style={{ width: "100%" }}
            >
              Sign In
            </button>
          </div>
        </form>
        <p style={{ textAlign: "center" }}>
          Don't have an account ? Click{" "}
          <a href="#" onClick={toggle}>
            Here
          </a>
        </p>
        <SignUp isShowing={isShowing} toggle={toggle} />
      </Modal.Body>
      {state.isLogin ? <Redirect to="/home" /> : <Redirect to="/" />}
    </Modal>
  );
};

export default SignIn;
