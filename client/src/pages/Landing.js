import React from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import UseModal from "../components/UseModal";
import "../App.css";

const Landing = () => {
  const { isShowing, toggle } = UseModal();
  const { showSignIn, toggleSignIn } = UseModal();

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 px-5 py-3">
            <div className="row float-left">
              <img src={require("../images/Logo.svg")} alt=""></img>
            </div>

            <div className="row float-left">
              <h1 className="landing-text">
                <i>Your</i> library anywhere
              </h1>
              <h5>
                Sign-up today and receive unlimited access to all of your
                reading - share your books.
              </h5>
            </div>

            <div className="row">
              <button
                className="Button-o mt-3 mr-3"
                style={{ width: "30%" }}
                onClick={toggle}
              >
                Sign Up
              </button>
              <button
                className="Button-g mt-3"
                style={{ width: "30%" }}
                onClick={toggleSignIn}
              >
                Sign In
              </button>
              <SignUp isShowing={isShowing} toggle={toggle} />
              <SignIn showSignIn={showSignIn} toggleSignIn={toggleSignIn} />
            </div>
          </div>

          <div className="col-6">
            <img
              src={require("../images/Vector1.svg")}
              style={{
                maxWidth: "100%",
                maxHeight: "100vh",
                float: "right",
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
