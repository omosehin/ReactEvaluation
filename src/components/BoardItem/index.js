import React, { Component } from "react";
import ReactDOM from "react-dom";

class BoardItem extends Component {
  constructor() {
    super();
    this.state = { value: "", isToggleOn: true };

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onChange(e) {
    const re = /^[1-9][0-9]?$|^100$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className="board_item">
        <input value={this.state.value} onChange={this.onChange} />

        {this.props.swappable && (
          <div>
            <div className="swap_button N">{swapIcon}</div>
            <div className="swap_button S">
              {swapIcon} onClick={this.handleClick}
            </div>
            <div className="swap_button W">
              {swapIcon} onClick={this.handleClick}
            </div>
            <div className="swap_button E">
              {swapIcon} onClick={this.handleClick}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BoardItem;

var swapIcon = (
  <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 384 384">
    <g>
      <g>
        <g>
          <polygon points="128,0 42.667,85.12 106.667,85.12 106.667,234.667 149.333,234.667 149.333,85.12 213.333,85.12    " />
          <polygon points="277.333,298.88 277.333,149.333 234.667,149.333 234.667,298.88 170.667,298.88 256,384 341.333,298.88    " />
        </g>
      </g>
    </g>
  </svg>
);
