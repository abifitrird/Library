import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyLibrary from "./pages/MyLibrary";
import AddBook from "./pages/AddBook";
import DetailBuku from "./pages/DetailBuku";
import Baca from "./pages/Baca";
import AdminPage from "./pages/AdminPage";
import AddBookAdmin from "./pages/AddBookAdmin";

import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/mylibrary" component={MyLibrary} />
          <PrivateRoute exact path="/addbook" component={AddBook} />
          <PrivateRoute exact path="/detailbuku" component={DetailBuku} />
          <PrivateRoute exact path="/baca" component={Baca} />
          <PrivateRoute exact path="/adminpage" component={AdminPage} />
          <PrivateRoute exact path="/addbookadmin" component={AddBookAdmin} />
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
