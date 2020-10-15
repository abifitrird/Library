import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";

const Home = () => {
  const [state, dispatch] = useContext(CartContext);

  return (
    <div>
      <Container className="mt-3">
        <Row>
          {/* Grid 3 untuk Side Bar */}
          <Col xs={3}>
            <SideBar />
          </Col>

          {/* Grid 9 untuk konten */}
          <Col xs={9}>
            <Jumbotron fluid style={{ padding: "0", background: "#E6F2FD" }}>
              <Container>
                <Row>
                  <div className="col-8 mt-5 my-3">
                    <h1 className="jumbo">
                      Share, read, and <i>love</i>
                    </h1>
                    <h5>Reading is fascinating</h5>
                  </div>
                  <div className="col-4 my-3">
                    <Image
                      src={require("../images/FixYou.svg")}
                      style={{
                        height: "300px",
                        width: "auto",
                        textAlign: "center",
                      }}
                    ></Image>
                  </div>
                </Row>
              </Container>
            </Jumbotron>

            <Row>
              <Col>
                <h3>List Book</h3>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <button className="btn btn-light">Category</button>
              </Col>
            </Row>
            {/* Card For Books */}
          </Col>
        </Row>
        <Row>
          <div>{JSON.stringify(state)}</div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
