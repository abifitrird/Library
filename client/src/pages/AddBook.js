import React from "react";
import SideBar from "../components/SideBar";

const AddBook = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="row-sm-3">
              <h4>Add Books</h4>
            </div>
            <div className="row-sm-3">
              <form>
                <div className="form-group">
                  <input
                    placeholder="Title"
                    type="text"
                    className="form-control"
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    placeholder="Publication Date"
                    type="date"
                    className="form-control"
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option selected disabled value="">
                      Category
                    </option>
                    <option>Sci-Fi</option>
                    <option>History</option>
                    <option>Report</option>
                    <option>Autobiography</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    placeholder="Pages"
                    type="number"
                    className="form-control"
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    placeholder="ISBN"
                    type="text"
                    className="form-control"
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="7"
                    placeholder="About This Book"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    className="form-control-file"
                    placeholder="Attache Book File"
                  ></input>
                </div>
                <button type="submit" className="Button-o float-right">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
