import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveChars } from "./ducks/reducer";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.retrieveChars();
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.props.isLoading && (
          <img src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-22.gif" />
        )}
        <div>
          {this.props.characters.results &&
            this.props.characters.results.map((val, i) => {
              return <div key={i}>{val.name}</div>;
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { retrieveChars })(App);
