import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import { fetchCat, fetchYe } from "./service";

import Cats from "./pages/cat";
import Quotes from "./pages/quotes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cat: "",
    };
  }

  getCat = () => {
    return fetchCat().then((data) => {
      let catPic = data.url;
      this.setState({ cat: catPic });
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <ul>
            <li>
              <Link to="/cats">Cat-apult</Link>
            </li>
            <li>
              <Link to="/quotes">The ONly direction</Link>
            </li>
          </ul>
        </header>
        <main>
          <h1>Hello World</h1>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route path="/cats">
            <Cats cat={this.state.cat} getCat={this.getCat} />
          </Route>
        </main>
      </div>
    );
  }
}

export default App;
