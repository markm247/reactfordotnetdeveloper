import React, { Component } from 'react';
import { render } from 'react-dom';

class World extends Component {
  constructor() {
    super();
    this.state = { animation: "rotate" }
  }

  toggleRotation() {
    this.state.animation != "rotate" ? this.setState({ animation: "rotate" }) : this.setState({ animation: "none" });
  }

  render() {
    return (
        <div>
          <div id="world" style={{animationName: this.state.animation}} onClick={this.toggleRotation.bind(this)} />
        </div>
    );
  }
}

class SolarSystem extends Component {
  render() {
    var worlds = [];
    for(var i=0; i < this.props.worlds; i++) {
      worlds.push(<World />);
    }
    return (
      <div>
        {worlds}
      </div>
    );
  }
}


render(<SolarSystem worlds = "9" />, document.getElementById('root'));
