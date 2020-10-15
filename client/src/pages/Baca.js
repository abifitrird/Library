import React, { Component } from "react";
import { ReactReader } from "react-reader";
import NavBar from "../components/NavBar";

const Baca = () => {
  return (
    <div className="container">
      <div className="row"></div>
      <NavBar />
      <div style={{ position: "relative", height: "100%" }}>
        {" "}
        {/* // * Container needs a height.. */}
        <p className="subtitle">
          In the medieval kingdom of Goredd, women are expected to be ladies,
          men are their protectors, and dragons get to be whomever they want.
          Tess, stubbornly, is a troublemaker. You can’t make a scene at your
          sister’s wedding and break a relative’s nose with one punch (no matter
          how pompous he is) and not suffer the consequences. As her family
          plans to send her to a nunnery, Tess yanks on her boots and sets out
          on a journey across the Southlands, alone and pretending to be a boy.
          Where Tess is headed is a mystery, even to her. So when she runs into
          an old friend, it’s a stroke of luck. This friend is a quigutl—a
          subspecies of dragon—who gives her both a purpose and protection on
          the road. But Tess is guarding a troubling secret. Her tumultuous past
          is a heavy burden to carry, and the memories she’s tried to forget
          threaten to expose her to the world in more ways than one. Returning
          to the fascinating world she created in the award-winning and New York
          Times bestselling Seraphina, Rachel Hartman introduces readers to a
          new character and a new quest, pushing the boundaries of genre once
          again in this wholly original fantasy.
        </p>
        <ReactReader
          url={"../books/Harry.epub"}
          title={"Harry"}
          location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={(epubcifi) => console.log(epubcifi)}
        />
      </div>
    </div>
  );
};

export default Baca;
