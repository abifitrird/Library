import React from "react";
import NavBar from "../components/NavBar";

const AddBookAdmin = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <NavBar />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <form>
              <div class="form-group">
                <input
                  placeholder="Title"
                  type="text"
                  class="form-control"
                  required
                ></input>
              </div>
              <div class="form-group">
                <input
                  placeholder="Publication Date"
                  type="date"
                  class="form-control"
                  required
                ></input>
              </div>
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option selected disabled value="">
                    Category
                  </option>
                  <option>Sci-Fi</option>
                  <option>History</option>
                  <option>Report</option>
                  <option>Autobiography</option>
                </select>
              </div>
              <div class="form-group">
                <input
                  placeholder="Pages"
                  type="number"
                  class="form-control"
                  required
                ></input>
              </div>
              <div class="form-group">
                <input
                  placeholder="ISBN"
                  type="text"
                  class="form-control"
                  required
                ></input>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="7"
                  placeholder="About This Book"
                ></textarea>
              </div>
              <div class="form-group">
                <input
                  type="file"
                  class="form-control-file"
                  placeholder="Attache Book File"
                ></input>
              </div>
              <button type="submit" class="Button-o float-right">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookAdmin;
