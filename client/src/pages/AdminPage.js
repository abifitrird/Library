import React from "react";
import NavBar from "../components/NavBar";

const AdminPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <NavBar />
          </div>
        </div>

        <div className="row my-2">
          <h3>Book verification</h3>
        </div>

        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">User or Author</th>
                <th scope="col">ISBN</th>
                <th scope="col">E-book</th>
                <th scope="col">Status Payment</th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td className="text-success">Approve</td>
                <td style={{ textAlign: "center" }}>
                  <img src={require("../images/success.svg")}></img>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Jacob</td>
                <td>Jacob</td>
                <td className="text-success">Approved</td>
                <td style={{ textAlign: "center" }}>
                  <img src={require("../images/success.svg")}></img>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>Larry</td>
                <td>Larry</td>
                <td className="text-danger">Canceled</td>
                <td style={{ textAlign: "center" }}>
                  <button className="btn btn-danger mx-1">Cancel</button>
                  <button className="btn btn-success mx-1">Approve</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>Larry</td>
                <td>Larry</td>
                <td className="text-warning">Waiting to be verified</td>
                <td style={{ textAlign: "center" }}>
                  <button className="btn btn-danger mx-1">Cancel</button>
                  <button className="btn btn-success mx-1">Approve</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>Larry</td>
                <td>Larry</td>
                <td className="text-warning">Waiting to be verified</td>
                <td style={{ textAlign: "center" }}>
                  <button className="btn btn-danger mx-1">Cancel</button>
                  <button className="btn btn-success mx-1">Approve</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>Larry</td>
                <td>Larry</td>
                <td className="text-warning">Waiting to be verified</td>
                <td style={{ textAlign: "center" }}>
                  <button className="btn btn-danger mx-1">Cancel</button>
                  <button className="btn btn-success mx-1">Approve</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
