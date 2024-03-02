import { Component } from "react";

class Clicker extends Component {
  state = {
    value: 0,
  };
  handlerClick = () => {
    this.setState((prevState) => ({value: prevState.value + 1}))
  };
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button type="button" onClick={() => this.handlerClick(10)}>
          +
        </button>
        <button type="button " onClick={() => this.handlerClick(20)}>
          -
        </button>
      </div>
    );
  }
}
export default Clicker;
