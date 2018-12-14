import React, { Component } from "react";
import ReactDOM from "react-dom";

import BoardItem from "./components/BoardItem/index.js";
import "./styles.css";

class App extends Component {
  state = {
    value: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };

  onInputChange = event => {
    this.setState({
      todo: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <div className="info">
          <div className="header">Instructions(read this)</div>

          <div className="entry">
            When done with your implementation hit the download button in the
            top left corner to download your solution in a zip file.
          </div>

          <div className="entry">
            Save the zip file with the name format{" "}
            <b>"firstName_lastName-square.zip"</b>.
          </div>

          <div className="entry">
            Send the zip file to gilbert.karadja@gmail.com. Late submissions
            will be ignored. Copying work will be severly penalized (-9,000
            points)
          </div>
        </div>

        <div className="info">
          <div className="header">Question 1</div>
        </div>

        <div className="">
          <div className="">
            <BoardItem value={this.state.value} onChange={this.onInputChange} />
            <BoardItem value={this.state.value} onChange={this.onInputChange} />
            <BoardItem value={this.state.value} onChange={this.onInputChange} />
          </div>

          <div className="">
            <BoardItem value={this.state.value} onChange={this.onInputChange} />
            <BoardItem
              swappable={true}
              value={this.state.value}
              onChange={this.onInputChange}
            />
            <BoardItem value={this.state.value} onChange={this.onInputChange} />
          </div>

          <div className="">
            <BoardItem value={this.state.value} onChange={this.onInputChange} />
            <BoardItem value={this.state.value} onChange={this.onInputChange} />
            <BoardItem value={this.state.value} onChange={this.onInputChange} />
          </div>
        </div>

        <div className="info">
          <div className="header">Requirements</div>
          <div className="entry">
            1) A user shoud be able to input a value into any square. The{" "}
            <b>value</b> should be a number <b>less than 100</b>
          </div>
          <div className="entry">
            2) Clicking on any of the swap buttons should swap the values of the
            respective squares involved.
          </div>
        </div>

        <div className="info">
          <div className="header">Question 2</div>
          <div className="entry">...just kidding</div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
