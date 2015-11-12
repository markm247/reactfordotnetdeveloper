import React, { Component } from 'react';
import { render } from 'react-dom';

class Worlds extends Component {
  worldMaker(n, m) {
    var worlds = []
    for(var i = 0; i < n; i++) {
      worlds.push(<HW key={i} />);
    }
      return worlds;
  }
  render() {
    return  <div>
              {this.worldMaker(this.props.number)}
            </div>;
  }
}


class HW extends Component {
  constructor() {
    super();
    this.state = { animation: "rotate" }
  }
  toggleRotation() {
    (this.state.animation == "rotate") ? this.setState({ animation: "none" }) : this.setState({ animation: "rotate"});
  }
  render() {
    return <div>Hello <div id="earth" style={{animationName: this.state.animation}} onClick={this.toggleRotation.bind(this)}/></div>;
  }
}

render(<Worlds number="10" />, document.getElementById("root"));
