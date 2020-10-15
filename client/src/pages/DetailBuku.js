import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";

const DetailBuku = () => {
  const [state, dispatch] = useContext(CartContext);

  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="d-flex flex-row" style={{ height: "400px" }}>
              <div className="d-flex flex-column">
                <img
                  src={require("../images/TessRoad.svg")}
                  style={{ height: "400px", textAlign: "center" }}
                ></img>
              </div>
              <div
                className="d-flex flex-column justify-content-between pl-4"
                style={{ height: "100%" }}
              >
                <div>
                  <h3>Tess on The Road</h3>
                  <p className="subtitle">Rachel Hartman</p>
                </div>
                <div>
                  <h6>Publication date</h6>
                  <p className="subtitle">April 2020</p>
                </div>
                <div>
                  <h6>Category</h6>
                  <p className="subtitle">Sci-Fi</p>
                </div>
                <div>
                  <h6>Pages</h6>
                  <p className="subtitle">436</p>
                </div>
                <div>
                  <h6 style={{ color: "red" }}>ISBN</h6>
                  <p className="subtitle">9781789807554</p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <article>
                <h4>About This Book</h4>
                <p className="subtitle">
                  In the medieval kingdom of Goredd, women are expected to be
                  ladies, men are their protectors, and dragons get to be
                  whomever they want. Tess, stubbornly, is a troublemaker. You
                  can’t make a scene at your sister’s wedding and break a
                  relative’s nose with one punch (no matter how pompous he is)
                  and not suffer the consequences. As her family plans to send
                  her to a nunnery, Tess yanks on her boots and sets out on a
                  journey across the Southlands, alone and pretending to be a
                  boy. Where Tess is headed is a mystery, even to her. So when
                  she runs into an old friend, it’s a stroke of luck. This
                  friend is a quigutl—a subspecies of dragon—who gives her both
                  a purpose and protection on the road. But Tess is guarding a
                  troubling secret. Her tumultuous past is a heavy burden to
                  carry, and the memories she’s tried to forget threaten to
                  expose her to the world in more ways than one. Returning to
                  the fascinating world she created in the award-winning and New
                  York Times bestselling Seraphina, Rachel Hartman introduces
                  readers to a new character and a new quest, pushing the
                  boundaries of genre once again in this wholly original
                  fantasy.
                </p>
              </article>
            </div>
            <div class="d-flex flex-row-reverse">
              <Link to="/baca">
                <button className="Button-g">Read Book</button>
              </Link>
              <button className="Button-o mr-1">Add Library</button>
            </div>
            <div>{JSON.stringify(state)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBuku;
