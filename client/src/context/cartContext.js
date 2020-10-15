import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  carts: [
    {
      title: "What if? Absurd question",
      author: "Randall Munroe",
      ISBN: "9781789807554",
      image: require("../images/WhatIf.svg"),
      ebook: "what if? absurd Question.pdf",
      status: "Approve",
    },
    {
      title: "Glyph: New look on things",
      author: "Morris Williamson",
      ISBN: "9781789807555",
      image: require("../images/Glyph.svg"),
      ebook: "Glyph.pdf",
      status: "Approve",
    },
    {
      title: "Harry Potter and Goblet of fire",
      author: "J. K. Rowling",
      ISBN: "9781789807666",
      image: require("../images/HarryPotter.svg"),
      ebook: "Harrypoter.pdf",
      status: "Cancel",
    },
    {
      title: "Tess on the Road",
      author: "Rachel Hartman",
      ISBN: "9781789807576",
      image: require("../images/TessRoad.svg"),
      ebook: "Harrypoter.pdf",
      status: "Waiting to be verified",
    },
  ],
  isLogin: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {props.children}
    </CartContext.Provider>
  );
};
