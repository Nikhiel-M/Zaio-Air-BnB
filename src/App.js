import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Router path="/search">
            <SearchPage />
          </Router>
        </Switch>

        <Route path="/">
          <Modal />
        </Route>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
