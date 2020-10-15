import React from "react";
import SideBar from "../components/SideBar";

const MyLibrary = () => {
  // Data Buku
  const books = [
    {
      title: "What if? Absurd question",
      author: "Randall Munroe",
      image: require("../images/WhatIf.svg"),
    },
    {
      title: "Glyph: New look on things",
      author: "Morris Williamson",
      image: require("../images/Glyph.svg"),
    },
    {
      title: "Harry Potter and Goblet of fire",
      author: "J. K. Rowling",
      image: require("../images/HarryPotter.svg"),
    },
    {
      title: "Tess on the Road",
      author: "Rachel Hartman",
      image: require("../images/TessRoad.svg"),
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="row-sm-3">
              <h4>My Library</h4>
            </div>
            <div className="row mt-4">
              {books.map((books) => (
                <div className="col-sm-3">
                  <div className="card" style={{ border: "none" }}>
                    <img class="card-img-top" alt="..." src={books.image}></img>
                    <h5 class="card-title py-2">{books.title}</h5>
                    <p class="card-text subtitle">{books.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
